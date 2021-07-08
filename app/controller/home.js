'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg 47213';
  }
  list() {
    const { app, ctx } = this;
    const list = [1,2,3]
    return ctx.success({
      data: {
        list,
      },
    });
  }
}

module.exports = HomeController;
