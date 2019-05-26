const Koa = require('koa');
const core = require('@koa/cors');
const app = new Koa();

//跨域
app.use(core({credentials:true}));

app.use(async (ctx, next) => {
    if(ctx.request.url.indexOf('list') !== -1){
        ctx.response.type='json';
        ctx.response['Access-Control-Allow-Credentials']=true;
        ctx.response.body={data:'Hello World'};
    }
});

// app.use(async (ctx, next) => {
//     const start = new Date().getTime(); // 当前时间
//     await next(); // 调用下一个middleware
//     const ms = new Date().getTime() - start; // 耗费时间
//     console.log(`Time: ${ms}ms`); // 打印耗费时间
// });

// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, koa2!</h1>';
// });

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3001);