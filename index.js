console.log(self)

onmessage = (e) => {
  console.log(`接收到了一个新的值${e.data}`)
  self.postMessage(e.data)
  console.log(`我发送了一个数据`)
}
