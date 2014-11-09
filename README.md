# cmdtwitter

## install

With [npm](http://npmjs.org) do:

```
npm install -g cmdtwitter
```

## setup

* create a twitter application [https://apps.twitter.com/](https://apps.twitter.com/)
* create consumer and access keys on tab "Keys and Access Tokens" for your app
* add the keys as environment variables in your .profile/.bash_profile...

```bash

export TWT_CONSUMER_KEY=<consumer_key>
export TWT_CONSUMER_SECRET=<consumer_secret>
export TWT_ACCESS_TOKEN=<access_token>
export TWT_ACCESS_TOKEN_SECRET=<access_token_secret>
export TWT_SCREEN_NAME=<screen_name> # without @, for coloring
# example: export TWT_SCREEN_NAME=duivvv

```



* restart your terminal

## usage

```

cmdtwitter, a command line twitter client

$ twt {arguments} <content>

Usage

-t, --tweet <string>   status to tweet
-s, --search <string>  search query
-h, --home             flag to display your timeline, default action
-l, --limit <number>   limit results of query, default 15
--help                 show help

```

### examples

```
$ twt -t "my tweet"
```

```
$ twt -s "#devinehowest" -l 50

$ twt -s "#devinehowest"
```

```
$ twt -h

$ twt
```

Tweets are displayed in reverse order (latest ones last).

## todo

* make environment variables step interactive (--set KEY_NAME --key ...)
* add functionality
* async url expanding (http://t.co to original URL)
