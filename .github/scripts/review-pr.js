const { Octokit } = require("@octokit/rest");
const { Configuration, OpenAIApi } = require("openai");

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY }),
);

async function reviewPR() {
  const { data: pullRequest } = await octokit.pulls.get({
    owner: 'sungwookoo',
    repo: 'cursor-nestjs-oop-solid',
    pull_number: process.env.PR_NUMBER,
  });

  const prDescription = pullRequest.body;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Review the following pull request description and provide feedback:\n\n${prDescription}`,
    max_tokens: 150,
  });

  const reviewComment = response.data.choices[0].text.trim();

  await octokit.issues.createComment({
    owner: 'sungwookoo',
    repo: 'cursor-nestjs-oop-solid',
    issue_number: process.env.PR_NUMBER,
    body: reviewComment,
  });
}

reviewPR().catch((error) => console.error(error));
