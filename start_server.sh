which pm2
if [[ $? -ne 0 ]]
then
    echo "Need to install pm2 - https://pm2.io/"
    exit 1
fi

export FLASK_APP=app/application.py
pm2 start python3 --name=gary -- -m flask run $@
