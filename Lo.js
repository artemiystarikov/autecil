const net = new brain.recurrent.LSTM();
net.train(['I am brainjs, Hello World!']);
const output = net.run('I am brainjs');
