# read function name
FUNC_NAME=$1

#echo "aa ${FUNC_NAME}"

# # find and replace string 'node-serverless-skeleton' in serverless.yml
sed -i.bk "s/node-serverless-skeleton/${FUNC_NAME}/" serverless.yml

# # find and replace string 'node-serverless-skeleton' in serverless.yml
sed -i.bk "s/node-serverless-skeleton/${FUNC_NAME}/" package.json

rm serverless.yml.bk
rm package.json.bk