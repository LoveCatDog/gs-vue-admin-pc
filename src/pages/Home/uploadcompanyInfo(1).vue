<template>
  <el-dialog
    :visible.sync="isVisible"
    :title="title"
    width = "500px"
    :close-on-click-modal='false'
    :close-on-press-escape='false'
    :modal-append-to-body="false"
    @close="closeDialog">
  <el-form :model="form">
    <el-form-item label="上传文件" :label-width="formLabelWidth">
      <el-upload
        ref="uploadExcel"
        action="/api/nationz-rent/enterprise/import"
        :limit=limitCount
        :auto-upload="false"
        accept=".xlsx,.xls"
        :before-upload="beforeUploadFile"
        :on-change="fileChange"
        :on-exceed="exceedFile"
        :on-success="handleSuccess"
        :on-error="handleError"
        :file-list="fileList">
        <el-button size="small" plain>选择文件</el-button>
        <div slot="tip" class="el-upload__tip">只能上传xlsx和xls文件</div>
      </el-upload>
    </el-form-item>
    <el-form-item style="text-align: center">
      <el-button size="small" type="primary" @click="uploadFile">立即上传</el-button>
      <el-button size="small" @click.native="isVisible = false">取消</el-button>
    </el-form-item>
  </el-form>
  </el-dialog>
</template>
<script>
    import axios from 'axios'
  export default {

      data(){
          return {
              dialogImageUrl:'',
              fileList:[],
              hideUpload: false,
              limitCount:1,
              formLabelWidth: '80px',
              dialogVisible: false,
            isVisible: this.isShow,
            form:{
                file: ''
            },
              fullscreen:false,
              dialog: {
                  width:'400px',
                  formLabelWidth:'120px'
              }
          }
      },
      props:{
          isShow:Boolean,
          title:String,
          dialogRow:Object,
          type:String
      },
      computed: {

          uploadDisabled:function() {
              return this.fileList.length
          },

      },
      created(){

      },
      mounted(){
          // console.log(this.cities);
          console.log(this.type,1222111,this.dialogRow);
          if(this.type =='edit'){
              this.form = this.dialogRow;
          }else{
              this.form.userStatus = '0';
              this.$nextTick(() => {
                  this.$refs['form'].resetFields()
              })
          }
      },
      methods:{
          // 文件超出个数限制时的钩子
          exceedFile(files, fileList) {
              this.$message.error({
                  title: '警告',
                  duration:'2000',
                  message: `只能选择 ${this.limitCount} 个文件，当前共选择了 ${files.length + fileList.length} 个`
              });
              return false
          },
          // 文件状态改变时的钩子
          fileChange(file, fileList) {
              let extension = file.name.substring(file.name.lastIndexOf('.')+1)
              // let size = file.size / 1024 / 1024
              if(extension == 'xlsx' ||  extension == 'xls') {

              }else {
                  this.$message.error({
                      title: '警告',
                      message: `只能上传Excel（即后缀是.xlsx和.xls）的文件`
                  });
                  fileList.length = 0;
                  return false

              }
              // console.log('change')
              // console.log(file)
              this.form.file = file.raw
              // console.log(this.form.file)
              // console.log(fileList)

          },
          // 上传文件之前的钩子, 参数为上传的文件,若返回 false 或者返回 Promise 且被 reject，则停止上传
          beforeUploadFile(file) {
              // console.log('before upload')
              // console.log(file)
              let extension = file.name.substring(file.name.lastIndexOf('.')+1)
              // let size = file.size / 1024 / 1024
              if(extension == 'xlsx' ||  extension == 'xls') {

              }else {
                  this.$message.error({
                      title: '警告',
                      message: `只能上传Excel（即后缀是.xlsx和.xls）的文件`
                  });
                  return false
              }

              // if(size > 10) {
              //     this.$notify.warning({
              //         title: '警告',
              //         message: `文件大小不得超过10M`
              //     });
              // }
          },
          // 文件上传成功时的钩子
          handleSuccess(res, file, fileList) {
              // console.log(res);
              if(res.code == 0){
                  this.$message.success({
                      title: '成功',
                      message: `文件上传成功`
                  });
                  this.$emit('closeDialog');
              }else {
                   let that = this
                  this.$message.error({
                      title: '错误',
                      message: `文件上传失败,请稍等重试`,
                      duration:'1500',
                      onClose:function () {
                          that.$emit('closeDialog');
                      }
                  });
              }
          },
          // 文件上传失败时的钩子
          handleError(err, file, fileList) {

              this.$message.error({
                  title: '错误',
                  message: `文件上传失败`
              });

          },
          uploadFile() {
              this.$refs.uploadExcel.submit()

          },
          closeDialog(){
              this.$emit('closeDialog');
          },

      }
  }
</script>

<style lang="less" >
  .shangchuanwin .el-upload--picture-card{
    width: 100px;
    height: 100px;
    line-height: 100px;
    position: absolute;
    display: none;
  }

  .suoxiao .el-upload-list--picture-card .el-upload-list__item{
    position: absolute;
    width: 300px;
    height: 300px;
    line-height: 300px;
    background: url("../../../../public/static/image/view.png");
  }
  .suoxiao  .el-upload--picture-card{
    width: 300px;
    height: 300px;
    line-height: 300px;
    position: absolute;
  }
  .file{
    padding-top: 15%;
  }

</style>
