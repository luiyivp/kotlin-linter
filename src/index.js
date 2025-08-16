const core = require('@actions/core')
const exec = require('@actions/exec')

export async function run() {
    try {
        const version = core.getInput('version');

        await setupKtlint(version)
    } catch (error) {
        if (/\bprocess\b.+\bfailed\b/.test(error.message)) {
            core.setFailed(error.message)
        } else {
            core.setFailed(error.stack)
        }
    }
    process.exit()
}

async function setupKtlint(version) {
    // const ktlintInstall = `curl -sSLO https://github.com/pinterest/ktlint/releases/download/${version}/ktlint && chmod a+x ktlint && sudo mv ktlint /usr/local/bin/`

    core.info(`Installing Ktlint version: ${version}...`);

    await exec.exec('curl', '-sSLO', `https://github.com/pinterest/ktlint/releases/download/${version}/ktlint`);
    await exec.exec('chmod', 'a+x', 'ktlint');
    await exec.exec('mv', 'ktlint', '/usr/local/bin/');

    core.info("Ktlint installed successfully.");async 
}

if (__filename.endsWith('index.js')) { run() }