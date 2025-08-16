const core = require('@actions/core')
const exec = require('@actions/exec')
const tc = require('@actions/tool-cache')

export async function run() {
    try {
        const version = core.getInput('version')
        const ktlintUrl = `https://github.com/pinterest/ktlint/releases/download/${version}/ktlint`
        const ktlintPath = await tc.downloadTool(ktlintUrl);
        await exec.exec('chmod a+x', ktlintPath);
        await exec.exec(ktlintPath);
    } catch (error) {
        if (/\bprocess\b.+\bfailed\b/.test(error.message)) {
            core.setFailed(error.message)
        } else {
            core.setFailed(error.stack)
        }
    }
    process.exit()
}

if (__filename.endsWith('index.js')) { run() }