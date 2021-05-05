# rpush
* 一个接口触达多平台，支持一个消息多平台同时发送
* 消息平台逻辑与业务逻辑的解耦，业务方不需要关心各个平台的对接实现，只需要关心：要用哪些平台发、要发给对应平台的哪些人、要发什么内容
* 极强的扩展性，要新增一个消息平台的支持，理论只需要新增几个类就能完成，且不需要写一行前端代码即可获得该平台对应的ui交互（包括：配置交互、接收人维护、web手动消息发送交互等）
* 当然也支持定时任务
* 消息方案预设置
* 提供即时通讯实现，且支持服务器横向扩展
