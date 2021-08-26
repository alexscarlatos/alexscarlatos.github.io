echo `date`

git fetch origin
DIFF=`git diff --name-only origin/main | wc -l`
if [[ $DIFF -ne 0 ]]
then
    echo "Changes detected, will pull and restart server"
    git reset --hard origin/main
    ./stop_server.sh
    ./start_server.sh --port=9090
else
    echo "No changes detected"
fi

echo
