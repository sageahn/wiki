'use strict'

export default {
  name: 'admin-profile',
  props: ['email', 'name', 'provider'],
  data() {
    return {
      password: '********',
      passwordVerify: '********'
    }
  },
  methods: {
    saveUser() {
      let self = this
      if (this.password !== this.passwordVerify) {
        return self.$store.dispatch('alert', {
          style: 'red',
          icon: 'square-cross',
          msg: 'The passwords don\'t match. Try again.'
        })
      }
      this.$http.post(window.location.href, {
        password: this.password,
        name: this.name
      }).then(resp => {
        self.$store.dispatch('alert', {
          style: 'green',
          icon: 'check',
          msg: 'Changes have been applied successfully.'
        })
      }).catch(err => {
        self.$store.dispatch('alert', {
          style: 'red',
          icon: 'square-cross',
          msg: 'Error: ' + err.body.msg
        })
      })
    }
  }
}
