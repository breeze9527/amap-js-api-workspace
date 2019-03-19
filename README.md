用于编写高德地图TypeScript定义的工作区，通过工作区可以在定义实际发布到[DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
前代码分模块编写、测试。

## 目录介绍
```
|-- pg-dist         用于测试demo的输出目录，用于测试类型定义的接口的返回值与选项。分模块存放
|-- playground      demo的源码
|-- script          存放各个功能脚本
|-- type-dist       类型定义输出目录
|-- type-template   用于新建类型定义的模板
|-- types           类型定义的源码，分模块存放
|-- .env            一些配置变量

```

## 新建
```shell
yarn create-type name [-D dependencies]
```
执行新建脚本后会在types目录新建一个新的目录，-D可以添加依赖引用到`index.d.ts`中。

生成目录中会有一个`meta.json`文件，用于配置编译结果，结构如下：
```javascript
{
    "authors": [                // 用于输出index.d.ts头部注释作者行
        {
            "name": "name",
            "github": "url"
        }
    ],
    "project": "project url"    // 用于输出index.d.ts头部注释作者行
}
```

## 测试
```shell
yarn lint typeName          # 测试指定的模块
```

## 输出
```shell
yarn build:pg               # 编译demo并输出
yarn pg                     # 编译demo并更新pg-dist/index.html
yarn build:type typeName    # 编译指定模块并输出
```
`build:type`指令输出的文件能直接复制到[DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)项目中，
经过测试即可发布提交MR发布。

## 清理
```shell
yarn clean:pg               # 删除demo输出
yarn clean:dist             # 删除dist输出
```
