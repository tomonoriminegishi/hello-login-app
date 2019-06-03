class User {
  isLoggedIn = () => this.get('isLoggedIn') === 'true';

  set = (key, value) => localStorage.setItem(key, value);

  get = key => this.getLocalStorage(key);

  getLocalStorage = key => {
    const ret = localStorage.getItem(key);
    if (ret) {
      return ret;
    }
    return null;
  };

  login = async (email, password) => {
    // ログイン処理
    // ログインエラー時には、falseを返してもいいし、returnを別の用途で利用したかったら
    // 例外を出しして呼び出し元でcatchしてもいいかと思います。

    this.set('isLoggedIn', true);

    return true;
  };

  logout = async () => {
    if (this.isLoggedIn()) {
      this.set('isLoggedIn', false);

      // ログアウト処理
      //　他に必要な処理があるのならこちら
    }
  };
}

export default new User();
