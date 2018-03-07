<template>
    <div class="form">
        <el-form label-width="100px" style="margin:20px;width:90%;min-width:600px;" :model="article_data" :rules="rules" ref='refArticle'>
            <el-form-item label="消息标题" prop='title' style="width:600px;">
                <el-input v-model="article_data.title"></el-input>
            </el-form-item>
            <el-form-item label="消息内容" style="width:986px;" prop='content'>
                <div id="article" style="height:260px;"></div>
            </el-form-item>
            <el-form-item label="消息地址" prop='url' style="width:600px;">
                <el-input v-model="article_data.url"></el-input>
            </el-form-item>
            <el-form-item label="消息地址" prop='image' style="width:600px;">
                <el-upload ref="upload" :data="token"  :on-success="uploadSuccess" :file-list="file" :on-change="getToken" class="upload-demo" drag :auto-upload='false' action="http://upload-z2.qiniup.com">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或
                        <em>点击上传</em>
                    </div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            </el-form-item>

            <el-form-item label="状态">
                <el-switch on-text="启用" off-text="禁用" v-model="article_data.status" style="width:100%"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click='onSubmit("refArticle")'>立即{{article_data.id ? '修改' : '添加'}}</el-button>
                <el-button @click='reset_article("article_data")'>重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import EditJs from './Edit.js';
module.exports = EditJs;
</script>
<style scoped>

</style>
