module.exports = {
  allowPostUpgradeCommandTemplating: true,
  allowedPostUpgradeCommands: [
    '^cd project && pip3 install',
    '^cd project && pip-licenses'
  ],
};
  