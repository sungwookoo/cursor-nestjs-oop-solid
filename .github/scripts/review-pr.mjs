import OpenAI from 'openai';
import { Octokit } from '@octokit/rest';

// OpenAI API 설정
const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

// Octokit 설정
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function reviewPR() {
  try {
    const { data: pullRequest } = await octokit.pulls.get({
      owner: 'sungwookoo',
      repo: 'cursor-nestjs-oop-solid',
      pull_number: process.env.PR_NUMBER,
    });

    const prDescription = pullRequest.body;

    // PR 설명에 대한 리뷰 생성 (한글로)
    const descriptionReview = await client.chat.completions.create({
      messages: [{ role: 'user', content: `다음 풀 리퀘스트 설명을 검토하고 피드백을 제공하세요:\n\n${prDescription}` }],
      model: 'gpt-3.5-turbo',
    });

    const descriptionComment = descriptionReview.choices[0].message.content.trim();
    console.log('Description Review Comment:', descriptionComment);

    // PR에 설명 리뷰 코멘트 추가
    await octokit.issues.createComment({
      owner: 'sungwookoo',
      repo: 'cursor-nestjs-oop-solid',
      issue_number: process.env.PR_NUMBER,
      body: descriptionComment,
    });

    // 변경된 파일 목록 가져오기
    const { data: files } = await octokit.pulls.listFiles({
      owner: 'sungwookoo',
      repo: 'cursor-nestjs-oop-solid',
      pull_number: process.env.PR_NUMBER,
    });

    let fileSummary = '';

    for (const file of files) {
      const fileName = file.filename;
      const patch = file.patch;
      const status = file.status;

      // 삭제된 파일은 건너뛰기
      if (status === 'removed') {
        console.log(`Skipping review for removed file: ${fileName}`);
        continue;
      }

      if (patch) {
        // 파일 변경 내용에 대한 리뷰 생성 (한글로)
        const fileReview = await client.chat.completions.create({
          messages: [{ role: 'user', content: `다음 파일 ${fileName}의 코드 변경 사항을 검토하고 피드백을 제공하세요:\n\n${patch}` }],
          model: 'gpt-3.5-turbo',
        });

        const fileComment = fileReview.choices[0].message.content.trim();
        console.log(`Review for ${fileName}:`, fileComment);
        
        fileSummary += `## ${fileName}\n\n patch: ${patch}\n\n`;

        // PR에 파일 변경 리뷰 코멘트 추가
        await octokit.issues.createComment({
          owner: 'sungwookoo',
          repo: 'cursor-nestjs-oop-solid',
          issue_number: process.env.PR_NUMBER,
          body: `파일 ${fileName}에 대한 리뷰:\n\n${fileComment}`,
        });
      }
    }

    if(fileSummary) {
      const fileSummaryReview = await client.chat.completions.create({
        messages: [{ role: 'user', content: `다음 파일 변경 사항 요약을 검토하고 피드백을 제공하세요:\n\n${fileSummary}` }],
        model: 'gpt-3.5-turbo',
      });

      await octokit.issues.createComment({
        owner: 'sungwookoo',
        repo: 'cursor-nestjs-oop-solid',
        issue_number: process.env.PR_NUMBER,
        body: `파일 변경 사항 요약 리뷰:\n\n${fileSummaryReview.choices[0].message.content.trim()}`,
      });
    }

    console.log('Comments posted successfully');
  } catch (error) {
    console.error('Error posting comment:', error);
  }
}

reviewPR().catch(error => console.error('Error in reviewPR function:', error));