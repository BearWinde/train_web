<template>
    <div>
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
            <label class="font-orbitron">選擇編碼器 </label>
            <Select id="selectEncoder">
              <option value="">請選擇</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </Select>
          </div>
          <div class="encoder-style border border-1 rounded p-4" style="margin: 10px; width: 30%;">
            <label class="font-orbitron">選擇f0提取算法</label>
            <Select id="selectEncoder">
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
            <label class="font-orbitron" style="display:flex; ">DDSP模型配置 </label>
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
            <label class="font-orbitron" style="display:flex; ">擴散模型配置 </label>
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
        <i class="bi bi-caret-down-fill fs-2"></i>
      <div class="mb-4 border border-1" id="DDSP-model-configuration">
        <div class="row m-0 p-4">
          <div class="col-4">
            <label for="num-workers" class="mb-2">num-workers，如果你的電腦配置較高，可以將這裡設置為0加快訓練速度</label>
            <input type="number" id="num-workers" value="2">
          </div>
          <div class="col-4 d-flex justify-content-center align-items-center">
            <input type="checkbox" id="check-workers" value="2" class="me-2" checked>
            <label for="selected-processor">是否緩存數據，啟用後可以加快訓練速度，關閉後可以節省顯存或內存，但會減慢訓練速度</label>
          </div>
          <div class="col-4">
            <label for="selected-processor" class="mb-2">若啟用緩存數據，使用顯存(cuda)還是內存(cpu)緩存，如果顯卡顯存充足，選擇cuda以加快訓練速度</label>
            <label class="me-4">
              <input type="radio" name="processor" value="gpu" id="selected-processor" class="me-2" checked />GPU
            </label>
            <label>
                <input type="radio" name="processor" value="cpu" class="me-2" />CPU
            </label>
          </div>
        </div>
        <div class="row m-0 p-4 mb-4">
          <div class="col-3">
            <label for="num-workers" class="mb-2">批量大小(batch_size)，根據顯卡顯存設置，小顯存適當降低該項，6G顯存可以設定為48，但該數值不要超過數據集總大小的1/4</label>
            <input type="number" id="num-workers" value="48">
          </div>
          <div class="col-3">
            <label for="num-workers" class="mb-2">學習率（一般需要動）</label>
            <input type="number" id="num-workers" value="0.0005">
          </div>
          <div class="col-3">
            <label for="num-workers" class="mb-2">每隔多少步驟(steps)產生一次評估日誌</label>
            <input type="number" id="num-workers" value="10">
          </div>
          <div class="col-3">
            <label for="num-workers" class="mb-2">每隔多少步(steps)驗證並保存一次模型，如果你的批量大小增大，可以適當減少這裡的數字，但不建議設置為1000以下</label>
            <input type="number" id="num-workers" value="2000">
          </div>
        </div>
      </div>
      <div style="display: flex; align-items: center; justify-content: center;">
        <mixPartError v-bind:style="{ width: '50%'}" />
        <Button class= "text-xl font-bold" style="margin: 10px;width: 50%; min-height: 100px; ">寫入配置文件</Button>
      </div>
      <button class="btn w-100 d-flex justify-content-between align-items-center border border-1" data-bs-toggle="collapse" 
      href="#DDSP-model-configuration" role="button" 
      aria-expanded="false" aria-controls="DDSP-model-configuration">
        <p>擴散模型配置</p>
        <i class="bi bi-caret-down-fill fs-2"></i>
      </button>
      <div class="mb-4 border border-1" id="DDSP-model-configuration">
        <div class="row m-0 p-4">
          <div class="col-3">
            <label for="num-workers" class="mb-2">num_workers，如果你的電腦配置了上述訓練，可以將這裡設定為0加速速度</label>
            <input type="number" id="num-workers" value="2">
          </div>
          <div class="col-3 d-flex justify-content-center align-items-center">
            <input type="checkbox" id="check-workers" value="2" class="me-2" checked>
            <label for="selected-processor">是否緩存數據，啟用後可以加快訓練速度，關閉後可以節省顯存或內存，但會減慢訓練速度</label>
          </div>
          <div class="col-3">
            <label for="selected-processor" class="mb-2">是否有儲存數據，啟用後可以加快訓練速度，關閉後可以節省顯著的儲存速度或內存，但會減慢訓練速度</label>
            <label class="me-4">
              <input type="radio" name="processor" value="gpu" id="selected-processor" class="me-2" checked />GPU
            </label>
            <label>
                <input type="radio" name="processor" value="cpu" class="me-2" />CPU
            </label>
          </div>
          <div class="col-3">
            <label for="selected-processor" class="mb-2">是否有儲存數據，啟用後可以加快訓練速度，關閉後可以節省顯著的儲存速度或內存，但會減慢訓練速度</label>
            <label class="me-4">
              <input type="radio" name="processor" value="gpu" id="selected-processor" class="me-2" checked />GPU
            </label>
            <label>
                <input type="radio" name="processor" value="cpu" class="me-2" />CPU
            </label>
          </div>
        </div>
        <div class="row m-0 p-4 mb-4">
          <div class="col-3">
            <label for="num-workers" class="mb-2">批量大小(batch_size)，根據顯卡顯存設置，小顯存適當降低該項，6G顯存可以設定為48，但該數值不要超過數據集總大小的1/4</label>
            <input type="number" id="num-workers" value="48">
          </div>
          <div class="col-3">
            <label for="num-workers" class="mb-2">學習率（一般需要動）</label>
            <input type="number" id="num-workers" value="0.0005">
          </div>
          <div class="col-3">
            <label for="num-workers" class="mb-2">每隔多少步驟(steps)產生一次評估日誌</label>
            <input type="number" id="num-workers" value="10">
          </div>
          <div class="col-3">
            <label for="num-workers" class="mb-2">每隔多少步(steps)驗證並保存一次模型，如果你的批量大小增大，可以適當減少這裡的數字，但不建議設置為1000以下</label>
            <input type="number" id="num-workers" value="2000">
          </div>
        </div>
      </div>
      <div class="row justify-content-between mb-4 p-0 m-0">
        <div class="output-style border border-1 rounded p-4 d-flex flex-column">
          <label for="output-message" class="mb-2">輸出訊息</label>
          <input type="text" id="output-message">
        </div>
        <div class="output-style border border-1 rounded p-4 text-center bg-warning btn d-flex justify-content-center align-items-center">
          <p>寫入設定檔</p>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import BasicUsage from '../components/card-futuristic/examples/basic-usage.vue'
import { Button,Select,Checkbox,Radio,RadioGroup} from 'ant-design-vue';
// import Checkbox from '@/components/ui/checkbox/Checkbox.vue';
import { ref } from 'vue';
import mixPartError from '@/components/card-futuristic/examples/mix-part-error.vue';
const value = ref('cuda');
</script>
