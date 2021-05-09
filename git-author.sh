#!/bin/sh

git filter-branch --env-filter '
OLD_EMAIL="chrisian@enclave.vn"
CORRECT_NAME="tranphuquy19"
CORRECT_EMAIL="christian@enclave.vn"
export GIT_COMMITTER_NAME="$CORRECT_NAME"
export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
' --tag-name-filter cat -- --branches --tags
