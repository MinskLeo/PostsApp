// let u = {
//   _id: String,
//   name: String,
//   login: String,
//   email: String,
//   password: String,
//   avatar: File || String,
//   posts: [
//     { title: 'First Post', body: 'First post ever! Hello guys!' },
//     { title: 'Second Post', body: 'Second post!' }
//   ],
//   subscriptions: [
//     '_id1',
//     '_id2',
//     '_id3',
//     '_id4'
//   ]
// }

export default new class DBProvider {
  checkUser (user) {
    return new Promise( (resolve, reject)=>{
      if(user.login==='1' && user.password==='1'){
        resolve(true);
      }else{
        reject('Not correct pass or login');
      }
        
    })
  }

  // Получение информации о себе
  async getUserInfo (_id) {
    return {
      _id: 1,
      name: 'Andrei',
      email: '2119930@gmail.com',
      avatar: 'https://web.chip-chap.com/img/ic_user_color.png'
    }
  }


  // MyPosts

  // Получение массива своих постов
  async getMyPosts(user) {
    return new Promise( (resolve, reject)=>{
      if (user == false) {
        reject('No user');
      }else{
        if(user.login == '1' && user.password == '1'){
          resolve([
            {title: 'First Post',body: 'First post ever! Hello guys!' },
            {title: 'Second Post',body: 'Second post!'}
          ])
        }else{
          reject('Bad login or password');
        }
        
      }

    })
    
   
  }

  addPost (post) {
    // Добавление поста
  }

  deletePost (_id) {
    // Удаление
  }

  editPost (_id, post) {
    // Изменение своего поста
  }


  // Subscriptions
  subscribe () {
    // Подписка на юзера
  }

  unsubscribe () {
    // Отписка от юзера
  }

  getMySubscriptionsList() {
    // Получение списка на кого подписан
  }

  getMySubscriptionsContent() {
    // Получение массива постов тех на кого подписан
  }

  // Subscribers
  getMySubscribersList () {
    // Получение списка подписчиков
  }

}