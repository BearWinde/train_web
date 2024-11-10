<template>
    <div>
      <h2 class="mb-4">Step 1: 數據集準備</h2>
      <div class="row justify-content-between mb-4 p-0 m-0">
        <div class="output-style border border-1 rounded p-4 text-center bg-light btn d-flex justify-content-center align-items-center">
          <p>一鍵劃分數據集</p>
        </div>
        <div class="output-style border border-1 rounded p-4 d-flex flex-column">
          <label for="output" class="mb-2">輸出信息</label>
          <input type="text" id="output">
        </div>
      </div>
      <div class="row justify-content-between mb-4 m-0">
        <div class="encoder-style border border-1 rounded p-4 d-flex flex-column">
          <label for="selectEncoder" class="mb-2">選擇編碼器</label>
          <select id="selectEncoder">
            <option value="">請選擇</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div class="encoder-style border border-1 rounded p-4 d-flex flex-column">
          <label for="selectEncoder" class="mb-2">選擇f0提取算法</label>
          <select id="selectEncoder">
            <option value="">請選擇</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div class="encoder-style border border-1 rounded p-4 text-center bg-warning btn d-flex justify-content-center align-items-center">
          <p>數據預處理</p>
        </div>
      </div>
      <div class="border border-1 rounded p-4 d-flex flex-column mb-4">
        <label for="examineEncoder" class="mb-2">預處理輸出信息，完成後請檢察一下是否有報錯信息，如無則可以進行下一步</label>
        <input type="text" id="examineEncoder">
      </div>
      <div class="border border-1 rounded p-4 text-center bg-light btn d-flex justify-content-center align-items-center">
        <p>清空輸出信息</p>
      </div>
      <h2 class="mb-4">Step 2: 填寫訓練設置和超參數</h2>
      <button class="btn w-100 d-flex justify-content-between align-items-center border border-1" data-bs-toggle="collapse" 
      href="#DDSP-model-configuration" role="button" 
      aria-expanded="false" aria-controls="DDSP-model-configuration">
        <p>DDSP模型配置</p>
        <i class="bi bi-caret-down-fill fs-2"></i>
      </button>
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
  
  <style lang="scss">
  .output-style {
    width: 49%;
  }
  .encoder-style {
    width: 32.9%;
  }
  </style>