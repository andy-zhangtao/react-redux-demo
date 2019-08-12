# 在React中使用material-ui

material-ui是一套可以用于React的UI框架，官网地址(https://material-ui.com). 

通过
```shell script
yarn add  @material-ui/core  @material-ui/icons 
``` 
可以很方便的安装它。 

我们先在Router的基础之上集成Material-ui，先看一下效果如何。

为了演示的方便，我们直接使用Material-ui提供的drawer demo(https://material-ui.com/zh/components/drawers/#PersistentDrawerLeft.tsx)

将ts代码拷贝出来后，单独在`components` 中创建`Drawers.tsx` 页面，内容就是刚才拷贝的tsx代码。

修改`router/router.tsx` 页面内容，添加一个Link. 
```typescript
                        <li>
                            <Link to="/drawer">Drawer</Link>
                        </li>
                        
                    <Route path="/drawer" component={Drawer}/>
```

此时一个最简单的Material-ui Drawer页面就完成了。 页面效果如下:
![](http://ww4.sinaimg.cn/large/006tNc79ly1g5wlsgs0e7j31bc025q2w.jpg)

当点击Drawer链接之后，将会跳转到刚才所编写的Drawer组件中。
![](http://ww1.sinaimg.cn/large/006tNc79ly1g5wlteomx3j31h40ckgoe.jpg)
