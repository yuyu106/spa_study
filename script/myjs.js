var myId = 999
var myIcon = 'green'

var userData = [
    {
        id: myId,
        name: '自分',
        description: 'わー',
        icon: myIcon
    },
   {
       id: 1,
       name: 'ほわん',
       description: '北国の小さな村で生まれ育った、白っぽいきつね族の女の子。',
       icon: 'rabbit'
   },
   {
       id: 2,
       name: 'ヒメコ',
       description: '縞々猫族の女の子。しましまのツインテールがチャームポイント。',
       icon: 'cat'
   },
   {
    id: 3,
    name: 'ヒメコ',
    description: '縞々猫族の女の子。しましまのツインテールがチャームポイント。',
    icon: 'tropical'
}
]

var messages = [
    {
        id:1,
        userId: 1,
        message: 'Hello'
    },
    {
        id: 2,
        userId: 2,
        message: 'こんにちは'
    },
    {
        id: 3,
        userId: 3,
        message: 'Bonjour!'
    }
]

//擬似的にWebAPI経由で情報を取得したようにする
var getMessages = function(callback) {
    setTimeout(function() {
        callback(null, messages)
    }, 1000)
}
var getUser = function(userId, callback) {
    setTimeout(function() {
        var filteredUsers = userData.filter(function (user) {
            return user.id === parseInt(userId, 10)
        })
        callback(null, filteredUsers && filteredUsers[0])
    }, 1000)
}
var getUsers = function(callback) {
    setTimeout(function() {
        callback(null, userData)
    }, 1000)
}
//擬似的にAPI経由で情報を更新したようにする
var postMsg = function(params, callback) {
    setTimeout(function() {
        params.id = messages.length + 1
        params.userId = myId
        params.icon = myIcon
        messages.push(params)
        callback(null, params)
    }, 1000)
}
var postUser = function(params, callback) {
    setTimeout(function() {
        params.id = userData.length + 1
        userData.push(params)
        callback(null, params)
    }, 1000)
}

var Messages = {
    template: '#top',
    data: function() {
        return {
            loading: false,
            sending: false,
            messages: function(){return []}, //初期値の空配列
            message: this.defaultMessage(),
            error: null
        }
    },
    //初期化時にデータを取得
    created: function() {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function() {
            this.loading = true
            getMessages((function(err, messages) {
                this.loading = false
                if (err) {
                    this.error = err.toString()
                } else {
                    this.messages = messages;
                }
            }).bind(this))
        },
        defaultMessage: function() {
            return {
                name: '',
                description: ''
            }
        },
        createMessage: function(){
            if(this.message.message.trim() === ''){
                return
            }
            postMsg(this.message, (function(err, message) {
                this.sending = false
                if(err) {
                    this.error = err.toString()
                } else {
                    this.error = null
                    this.message = this.defaultMessage()
                    //ユーザー一覧に戻る
                    this.$router.push('/top')
                }
            }).bind(this))
        },

        iconColor: function(userId) {
            var user = userData.filter(user => user.id === userId)
            return user[0].icon
        }
    }
}

var UserList = {
    template: '#user-list',
    data: function() {
        return {
            loading: false,
            users: function(){return []}, //初期値の空配列
            error: null
        }
    },
    //初期化時にデータを取得
    created: function() {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function() {
            this.loading = true
            getUsers((function(err, users) {
                this.loading = false
                if (err) {
                    this.error = err.toString()
                } else {
                    this.users = users;
                }
            }).bind(this))
        }
    }

    /*
    data: function() {
        return {
            users: function() {return []},
            error: null
        }
    },
    beforeRouteEnter: function(To, from, next) {
        getUsers((function (err, users){
            if(err) {
                this.error = err.toString()
            } else {
                next(function (vm) {
                    vm.users = users
                })
            }
        }).bind(this))
    }
    */
}

var UserDetail = {
    template: '#user-detail',
    data: function() {
        return {
            loading: false,
            user: null,
            error: null
        }
    },
    created: function() {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function() {
            this.loading = true
            getUser(this.$route.params.userId, (function(err, user) {
                this.loading = false
                if (err) {
                    this.error = err.toString()
                } else {
                    this.user = user;
                }
            }).bind(this))
        }
    }
}

var UserCreate = {
    template: '#user-create',
    data: function() {
        return {
            sending: false,
            user: this.defaultUser(),
            error: null
        }
    },
    created: function() {
    },
    methods: {
        defaultUser: function() {
            return {
                name: '',
                description: ''
            }
        },
        createUser: function(){
            if(this.user.name.trim() === ''){
                this.error = "Nameは必須です"
                return
            }
            if(this.user.description.trim() === ''){
                this.error = "Descriptionは必須です"
                return
            }
            postUser(this.user, (function(err, user) {
                this.sending = false
                if(err) {
                    this.error = err.toString()
                } else {
                    this.error = null
                    this.user = this.defaultUser()
                    alert('新規ユーザーが登録されました')
                    //ユーザー一覧に戻る
                    this.$router.push('/users')
                }
            }).bind(this))
        }
    }
}


var router = new VueRouter({
    //ルート定義を配列で渡す
    routes: [
        {
            path: '/top',   //URLの指定。ファイル名#/topでアクセスできる。
            component: Messages
        },
        {
            path: '/users',   //URLの指定。ファイル名#/usersでアクセスできる。
            component: UserList,
            /*
            beforeEnter: function (to, from, next) {
                //users?redirect=trueでアクセスした時だけリダイレクト
                if(to.query.redirect === 'true') {
                    next('/top')
                } else {
                    next ()
                }
            }
            */
        },
        {
            path: '/users/new',
            component: UserCreate
        },
        {
            path: '/user/:userId',  
            name: 'user', 
            component: UserDetail
        }
    ] 
})

/*  usersにアクセスしたらリダイレクトする
router.beforeEach(function (to, from, next) {
    if(to.path === '/users') {
        next('/top')
    } else {
        next()
    }
})
*/

var app = new Vue({
    el: '#app',
    router: router
})

