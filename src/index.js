import * as core from "@actions/core";
import * as exec from "@actions/exec";

try {
    const version = core.getInput('version');
    const ktlintInstall = `curl -sSLO https://github.com/pinterest/ktlint/releases/download/${version}/ktlint && chmod a+x ktlint && sudo mv ktlint /usr/local/bin/`

    core.info(`Installing Ktlint version: ${version}...`);

    await exec.exec(ktlintInstall);

    core.info("Ktlint installed successfully.");
} catch (error) {
    core.setFailed(error.message);
}
