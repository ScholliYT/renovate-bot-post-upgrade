module.exports = {
  allowPostUpgradeCommandTemplating: true,
  allowedPostUpgradeCommands: [
    "^python3 -m venv venv$",
    "^source venv/bin/activate$",
    "^source venv/bin/activate && cd project && pip3 install -r requirements.txt",
    "^source venv/bin/activate && cd project && pip-licenses --ignore-packages pkg-resources --with-urls --format=csv --output-file=third-party-licenses/third-party-licenses.csv$",
    "^source venv/bin/activate && cd project && pip-licenses --ignore-packages pkg-resources --summary --output-file=third-party-licenses/third-party-licenses-summary.txt$"
  ],
};
  