<template>
    <div style="margin: 10px;">
      <basic-usage tiltle="Step 1: 數據集準備" content="
请将切片后的数据集放置在data/train/audio文件夹下，在数据集中按训练集：验证集=100:1的比例挑选验证集音频放置到data/val/audio文件夹中
单说话人模型，直接将所有wav文件放置到对应的audio文件夹下即可。
如果是训练多说话人模型，需要在训练集和验证集的audio文件夹下新建不同说话人的目录，只能以纯数字命名，以1开始
如果你不想手动挑选验证集，在数据集放置到data/train/audio后也可以点击下面的一键划分数据集完成操作。
验证集的条数最好不要超过10条，否则训练验证会变得很慢。验证集的音频质量越高越好。"/>

      <div style="display: flex; align-items: center; justify-content: center;">
      <Button class= "text-xl font-bold" style="margin: 10px;width: 50%; min-height: 100px; ">劃分資料集</Button>
      <mixPartError v-bind:style="{ width: '50%'}" />
      </div>
      <basic-usage tiltle="Step 2: 選取编码器與f0提取算法编码器" content="确认训练集和验证集正确放置后请选择训练编码器和f0提取算法
编码器：hubertsoft: 咬字较为清晰 | contentvec(768l12): 音色更为还原
f0算法：crepe: 抗噪能力较强但预处理速度慢 | parselmouth: 抗噪能力较弱但预处理速度快
注意，不同编码器训练出来的模型不通用，并且对应不同的配置文件，在推理时选择不匹配的配置文件会导致错误"/>
        <div style="display: flex; align-items: stretch; justify-content: stretch;" >
          <div class="encoder-style border border-1 rounded p-4" style="margin: 10px; width: 30%;">
            <h2 class="font-orbitron">選擇編碼器 </h2>
            <Select id="selectEncoder" style="width: 100%;">
              <option value="">請選擇</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </Select>
          </div>
          <div class="encoder-style border border-1 rounded p-4" style="margin: 10px; width: 30%;">
            <h2 class="font-orbitron">選擇f0提取算法</h2>
            <Select id="selectEncoder" style="width: 100%;">
              <option value="">請選擇</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </Select>
          </div>
          <Button class="text-xl font-bold"style="margin: 10px; width: 40%;min-height: 100px; ">數據預處理</Button>
        </div>
      <div class="border border-1 rounded p-4 d-flex flex-column mb-4">
        <mixPartError  />
      </div>
      <div class="border border-1 rounded p-4 text-center bg-light btn d-flex justify-content-center align-items-center">
        <Button class= "text-xl font-bold" style=" width: 100%;min-height: 100px; font-size: 20px ">清空訊息</Button>
      </div>
      <basic-usage tiltle="Step 3: 填写训练设置和超参数" content="
DSP的完整推理过程需要训练2个模型，分别是DDSP模型和扩散模型。因此你需要在下面设置2份配置文件的超参数。"/>
      <div style="align-items: stretch; justify-content: stretch;" >
        <div class="encoder-style border border-1 rounded p-4 " style=" width: 100%;">
            <label class="font-orbitron font-bold " style="font-size: 20px;display:flex; ">DDSP模型配置 </label>
            <div style="display: flex; align-items: stretch; justify-content: stretch; ">
              <div class="encoder-style border border-1 rounded p-4 " style="margin: 10px; width: 30%;">
                <h2 class="font-orbitron">num_workers, 如果你的电脑配置较高，可以将这里设置为0加快训练速度 </h2>
                <Select id="selectEncoder" style="width: 100%;">
                  <option value="">請選擇</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Select>
              </div>
              <div class="encoder-style border border-1 rounded p-4 " style="margin: 10px; width: 30%;">
                <Checkbox/> <label class="font-orbitron" >是否缓存数据，启用后可以加快训练速度，关闭后可以节省显存或内存，但会减慢训练速度 </label>
              </div>
              <div class="encoder-style border border-1 rounded p-4" style="margin: 10px; width: 30%;">
                <h2 class="font-orbitron">num_workers, 如果你的电脑配置较高，可以将这里设置为0加快训练速度 </h2>
                <RadioGroup value="cuda">
                  <Radio class="encoder-style border border-1 rounded p-2 font-orbitron" value="cuda" checked >cuda</Radio>
                  <Radio class="encoder-style border border-1 rounded p-2 font-orbitron" value="cpu">cpu</Radio> 
                </RadioGroup>
              </div>
            </div>
            <div style="display: flex; align-items: stretch; justify-content: stretch;">
              <div class="encoder-style border border-1 rounded p-4" style="width: 25%;">
                <h2 class="font-orbitron">批量大小(batch_size)，根据显卡显存设置，小显存适当降低该项，6G显存可以设定为48，但该数值不要超过数据集总大小的1/4 </h2>
                <Select id="selectEncoder" style="width: 100%;">
                  <option value="">請選擇</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Select>
              </div>
              <div class="encoder-style border border-1 rounded p-4" style=" width: 25%;">
                <h2 class="font-orbitron">学习率（一般不需要动）</h2>
                <Select id="selectEncoder" style="width: 100%;">
                  <option value="">請選擇</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Select>
              </div>
              <div class="encoder-style border border-1 rounded p-4" style=" width: 25%;">
                <h2 class="font-orbitron">每隔多少步(steps)生成一次评估日志</h2>
                <Select id="selectEncoder" style="width: 100%;">
                  <option value="">請選擇</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Select>
              </div>
              <div class="encoder-style border border-1 rounded p-4" style=" width: 25%;">
                <h2 class="font-orbitron">每隔多少步(steps)验证并保存一次模型，如果你的批量大小较大，可以适当减少这里的数字，但不建议设置为1000以下</h2>
                <Select id="selectEncoder" style="width: 100%;">
                  <option value="">請選擇</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Select>
              </div>
            </div>
        </div>
      </div>
      <div style="align-items: stretch; justify-content: stretch;" >
        <div class="encoder-style border border-1 rounded p-4 " style=" width: 100%;">
            <label class="font-orbitron font-bold " style="font-size: 20px;display:flex; ">擴散模型配置 </label>
            <div style="display: flex; align-items: stretch; justify-content: stretch; ">
              <div class="encoder-style border border-1 rounded p-4 " style=" width: 25%;">
                <h2 class="font-orbitron">num_workers, 如果你的电脑配置较高，可以将这里设置为0加快训练速度 </h2>
                <Select id="selectEncoder" style="width: 100%;">
                  <option value="">請選擇</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Select>
              </div>
              <div class="encoder-style border border-1 rounded p-4 " style="width: 25%;">
                <Checkbox/> <label class="font-orbitron" >是否缓存数据，启用后可以加快训练速度，关闭后可以节省显存或内存，但会减慢训练速度 </label>
              </div>
              <div class="encoder-style border border-1 rounded p-4" style="width: 25%;">
                <h2 class="font-orbitron">num_workers, 如果你的电脑配置较高，可以将这里设置为0加快训练速度 </h2>
                <RadioGroup value="cuda">
                  <Radio class="encoder-style border border-1 rounded p-2 font-orbitron" value="cuda" checked >cuda</Radio>
                  <Radio class="encoder-style border border-1 rounded p-2 font-orbitron" value="cpu">cpu</Radio> 
                </RadioGroup>
              </div>
              <div class="encoder-style border border-1 rounded p-4" style=" width: 25%;">
                <h2 class="font-orbitron">训练数据类型，fp16和bf16可能会有更快的训练速度，前提是你的显卡支持 </h2>
                <RadioGroup value="fp32">
                  <Radio class="encoder-style border border-1 rounded p-2 font-orbitron" value="fp32">fp32</Radio>
                  <Radio class="encoder-style border border-1 rounded p-2 font-orbitron" value="fp16">fp16</Radio>
                  <Radio class="encoder-style border border-1 rounded p-2 font-orbitron" value="bf16">bf16</Radio>
                </RadioGroup>
              </div>
            </div>
            <div style="display: flex; align-items: stretch; justify-content: stretch;">
              <div class="encoder-style border border-1 rounded p-4" style="width: 25%;">
                <h2 class="font-orbitron">批量大小(batch_size)，根据显卡显存设置，小显存适当降低该项，6G显存可以设定为48，但该数值不要超过数据集总大小的1/4 </h2>
                <Select id="selectEncoder" style="width: 100%;">
                  <option value="">請選擇</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Select>
              </div>
              <div class="encoder-style border border-1 rounded p-4" style=" width: 25%;">
                <h2 class="font-orbitron">学习率（一般不需要动）</h2>
                <Select id="selectEncoder" style="width: 100%;">
                  <option value="">請選擇</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Select>
              </div>
              <div class="encoder-style border border-1 rounded p-4" style=" width: 25%;">
                <h2 class="font-orbitron">每隔多少步(steps)生成一次评估日志</h2>
                <Select id="selectEncoder" style="width: 100%;">
                  <option value="">請選擇</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Select>
              </div>
              <div class="encoder-style border border-1 rounded p-4" style=" width: 25%;">
                <h2 class="font-orbitron">每隔多少步(steps)验证并保存一次模型，如果你的批量大小较大，可以适当减少这里的数字，但不建议设置为1000以下</h2>
                <Select id="selectEncoder" style="width: 100%;">
                  <option value="">請選擇</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Select>
              </div>
            </div>
        </div>
      </div>
      <div style="display: flex; align-items: center; justify-content: center;">
        <mixPartError v-bind:style="{ width: '50%'}" />
        <Button class= "text-xl font-bold" style="margin: 10px;width: 50%; min-height: 100px; ">寫入配置文件</Button>
      </div>
      <basic-usage tiltle="Step 4: 开始训练" content="D3SP的完整推理过程需要训练2个模型。
首先选择训练进度，从头开始训练将会将exp文件夹中的对应模型进度保存备份至models_backup文件夹，如果是训练扩散模型，会自动装载对应编码器的预训练底模。
两个模型的训练是独立的，你可以以任意顺序训练两个模型。训练前请先在上方选择预处理对应的编码器。"/>

      <div class="encoder-style border border-1 rounded p-4 " style=" width: 100%;">
            <div style="display: flex; align-items: stretch; justify-content: stretch;  ">
              <div class="encoder-style border border-1 rounded p-4" style="width: 100%;" >
                <h2 class="font-orbitron">你的当前训练进度 </h2>
                <RadioGroup value="cuda">
                  <Radio class="encoder-style border border-1 rounded p-2 font-orbitron" value="cuda">從頭開始訓練</Radio>
                  <Radio class="encoder-style border border-1 rounded p-2 font-orbitron" value="cpu">繼續上次訓練進度</Radio> 
                </RadioGroup>
              </div>
            </div>
            <div style="display: flex; align-items: center; justify-content: center;">
              <Button class= "text-xl font-bold" style="margin: 10px;width: 50%; min-height: 50px; ">寫入配置文件</Button>
              <Button class= "text-xl font-bold" style="margin: 10px;width: 50%; min-height: 50px; ">寫入配置文件</Button>
            </div>
            <div style="display: flex; align-items: center; justify-content: center;">
              <mixPartError v-bind:style="{ margin: '10px',width: '50%'}" />
              <mixPartError v-bind:style="{ margin: '10px',width: '50%'}" />
            </div>
            <div style="display: flex; align-items: stretch; justify-content: stretch;  ">
              <div class="encoder-style border border-1 rounded p-4" style="width: 100%;" >
                <h2 class="font-orbitron">启动Tensorboard前，请选择当前正在训练的模型 </h2>
                <RadioGroup value="cuda">
                  <Radio class="encoder-style border border-1 rounded p-2 font-orbitron" value="cuda">DDSP</Radio>
                  <Radio class="encoder-style border border-1 rounded p-2 font-orbitron" value="cpu">擴散模型</Radio> 
                </RadioGroup>
              </div>
            </div>
            <Button class= "text-xl font-bold" style="width: 100%; min-height: 50px; ">打開tensorboard</Button>
      </div>
    </div>
    
    <div>    
      <iframe 
      src="http://localhost" 
      width="1000" 
      height="500" >
      </iframe>
    </div>
  </template>
  
<script setup lang="ts">
import BasicUsage from '../components/card-futuristic/examples/basic-usage.vue'
import { Button,Select,Checkbox,Radio,RadioGroup} from 'ant-design-vue';
import mixPartError from '@/components/card-futuristic/examples/mix-part-error.vue';
</script>
