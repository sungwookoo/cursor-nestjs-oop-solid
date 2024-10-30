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

    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: `Review the following pull request description and provide feedback:\n\n${prDescription}` }],
      model: 'gpt-3.5-turbo',
    });

    const reviewComment = chatCompletion.choices[0].message.content.trim();

    console.log('Review Comment:', reviewComment); // 로그 추가

    await octokit.issues.createComment({
      owner: 'sungwookoo',
      repo: 'cursor-nestjs-oop-solid',
      issue_number: process.env.PR_NUMBER,
      body: reviewComment,
    });

    console.log('Comment posted successfully'); // 로그 추가
  } catch (error) {
    console.error('Error posting comment:', error);
  }
}

reviewPR().catch(error => console.error('Error in reviewPR function:', error));