# renovate-bot-post-upgrade
Testing integration of renovate bot with license management scripts through postUpgradeTasks. 

This will first run the normal renovate bot and check for any updates (in project/requirements.txt). 
If there is an update renovate will update the stored third-party-licenses though commands in postUpgradeTasks.



# Running 
Generate GitHub PAT `RENOVATE_TOKEN` with `public:repo`


`export RENOVATE_TOKEN=...`
`docker run --rm -it -e RENOVATE_TOKEN -e LOG_LEVEL=debug -v /mnt/h/git/renovate-bot-post-upgrade/renovate-config/config.js:/usr/src/app/config.js renovate/renovate ScholliYT/renovate-bot-post-upgrade`
