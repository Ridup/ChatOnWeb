## 写在前面（ Foreword ）

一款基于 React 和 Kafka 搭建的一个简单的实时多人聊天系统，主要是为了日常学习使用。

## 快速上手（ Getting Started ）

仅说明在windows下的使用，Linux也大差不差

### 启动 Zookeeper

```shell script
.\zookeeper-server-start.bat ..\..\config\zookeeper.properties

```

### 启动 Kafka

```shell script
.\kafka-server-start.bat ..\..\config\server.properties
```

#### Kafka 相关命令

* 创建Topic

```
kafka-topics --create --topic kafka-chat --zookeeper localhost:2181 --replication-factor 1 --partitions 1
```

* 查看当前服务器中的所有Topic

```
 .\kafka-topics.bat --bootstrap-server=localhost:9092 --list
```

* 查看Topic详情

```
.\kafka-topics.bat --bootstrap-server=localhost:9092 --describe --topic 'kafka-chat'
```

### 启动服务

```
mvn spring-boot:run
```

### 启动页面

```
npm start
```
## 示例
#### 登录
![](https://cdn.jsdelivr.net/gh/ridup/PicGo-Images/blog/20210531005249.gif)

#### 发送消息
![](https://cdn.jsdelivr.net/gh/ridup/PicGo-Images/blog/20210531005813.png)

aaa
