<template>
  <div style="margin: 10px;">
    
    <basic-usage tiltle="選擇训练model和參數設置" content="
DSP的完整推理过程需要训练2个模型，分别是DDSP模型和扩散模型。因此你需要在下面设置2份配置文件的超参数。"/>
    <div style="align-items: stretch; justify-content: stretch;" >
      <div class="encoder-style border border-1 rounded p-4 " style=" width: 100%;">
          <label class="font-orbitron font-bold " style="font-size: 20px;display:flex; ">DDSP模型配置 </label>
          <div style="display: flex; align-items: stretch; justify-content: stretch; ">
            <div class="encoder-style border border-1 rounded p-4 " style="margin: 10px; width: 50%;">
              <h2 class="font-orbitron">选择DDSP模型 </h2>
              <Select id="selectEncoder" style="width: 100%;">
                <option value="">請選擇</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Select>
            </div>
            <div class="encoder-style border border-1 rounded p-4 " style="margin: 10px; width: 50%;">
              <h2 class="font-orbitron">选择扩散模型</h2>
              <Select id="selectEncoder" style="width: 100%;">
                <option value="">請選擇</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Select>
            </div>
          </div>
          <div style="display: flex; align-items: stretch; justify-content: stretch; ">
            <div class="encoder-style border border-1 rounded p-4 " style="margin: 10px; width: 50%;">
              <h2 class="font-orbitron">配置文件 </h2>
              <Select id="selectEncoder" style="width: 100%;">
                <option value="">請選擇</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Select>
            </div>
            <div class="encoder-style border border-1 rounded p-4 " style="margin: 10px; width: 50%;">
              <h2 class="font-orbitron">配置文件</h2>
              <Select id="selectEncoder" style="width: 100%;">
                <option value="">請選擇</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Select>
            </div>
          </div>
          <Button class= "text-xl font-bold" style="margin: 10px;width: 100%; min-height: 50px; ">寫入配置文件</Button>
      </div>
    </div>
    <basic-usage tiltle="Step 4: 开始训练" content="DDSP模型和扩散模型需要选择同一个说话人，例如在DDSP中的说话人0和扩散模型中的说话人1为同一个角色，则需要在下面分别指定为DDSP: 0, 扩散模型: 1.
正常情况下单说话人两个模型都选0就OK。"/>
          <div style="display: flex; align-items: stretch; justify-content: stretch; ">
            <div class="encoder-style border border-1 rounded p-4 " style="margin: 10px; width: 50%;">
              <h2 class="font-orbitron">DDSP说话人ID </h2>
              <Select id="selectEncoder" style="width: 100%;">
                <option value="">請選擇</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Select>
            </div>
            <div class="encoder-style border border-1 rounded p-4 " style="margin: 10px; width: 50%;">
              <h2 class="font-orbitron">扩散模型说话人ID</h2>
              <Select id="selectEncoder" style="width: 100%;">
                <option value="">請選擇</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Select>
            </div>
          </div>
          <UploadDragger
            name="file"
            :multiple="true"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
            <p class="ant-upload-drag-icon">
              <inbox-outlined></inbox-outlined>
            </p>
            <p class="ant-upload-text">Click or drag file to this area to upload</p>
            <p class="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from uploading company data or other
              band files
            </p>
          </UploadDragger>
          <Button class= "text-xl font-bold" style="width: 100%; margin-top:10px; margin-bottom: 10px;  min-height: 50px; ">音頻轉換</Button>
          <UploadDragger
            name="file"
            :multiple="true"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
            <p class="ant-upload-drag-icon">
              <inbox-outlined></inbox-outlined>
            </p>
            <p class="ant-upload-text">Click or drag file to this area to upload</p>
            <p class="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from uploading company data or other
              band files
            </p>
          </UploadDragger>

  </div>
</template>

<script setup lang="ts">
import { InboxOutlined } from '@ant-design/icons-vue';
import BasicUsage from '../components/card-futuristic/examples/basic-usage.vue'
import { Button,Select,UploadDragger} from 'ant-design-vue';
</script>
