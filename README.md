# React - ログイン処理例

## 実行方法

```
git clone https://github.com/tomonoriminegishi/hello-login-app.git
cd hello-login-app
npm install
npm start
```

## 確認方法

 * ログイン画面

http://localhost:3000/login

ログイン処理は、書いていないのでなんでも通ります。
ログイン後は/list1へリダイレクトされる

 * ログアウト画面

http://localhost:3000/logout

 * リスト1画面　
 
 認証領域なので、ログインしていないと/loginへリダイレクトされる

http://localhost:3000/list1

 * リスト2画面　
 
 認証領域なので、ログインしていないと/loginへリダイレクトされる

http://localhost:3000/list2

 * この画面は存在しないので、リスト1画面へリダイレクトされる。ただしログインしていない場合は、/loginリダイレクトする

http://localhost:3000/list3

