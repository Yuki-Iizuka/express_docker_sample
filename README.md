README
## サーバ起動手順

* 初回
```
$ docker-compose build
```

* コンテナの起動

```
$ docker-compose up -d
```

* コンテナログイン
### express server
```
$ docker-compose exec app /bin/bash --login
```

* パッケージインストール

```
root@xxxxxxxxxxxx:/app# npm install
```

* ローカルサーバ起動

```
root@xxxxxxxxxxxx:/app# npm run server
```

* ブラウザでアクセス

* http://localhost
