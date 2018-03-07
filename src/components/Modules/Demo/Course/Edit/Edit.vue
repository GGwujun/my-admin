<template>
    <div class="form">
        <el-form label-width="100px" style="margin:20px;width:90%;min-width:600px;" :model="article_data" :rules="rules" ref='refArticle'>
            <el-form-item label="课程标题" prop='title' style="width:600px;">
                <el-input v-model="article_data.title"></el-input>
            </el-form-item>

            <el-form-item label="课程简介" style="width:986px;" prop='content'>
                <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="article_data.summary">
                </el-input>
            </el-form-item>

            <el-form-item label="所属父级" prop='pid'>
                <el-select v-model="article_data.pid" @visible-change="addPcourses" :loading="Pcourse.length?false:true" placeholder="请选择所属课程">
                    <el-option label="一级课程" v-if="article_data.pid" value="0"></el-option>
                    <el-option v-for="item  in  Pcourse" :key='item._id' :value="item._id" :label="item.title"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="课程路径" prop='coursepath' style="width:600px;">
                <el-input v-for="item  in  article_data.coursepath" v-model="item.url" :key="item.name"></el-input>
            </el-form-item>

            <el-form-item label="上传视频">
                <div class="upload-demo">
                    <el-button style="margin:auto  auto   10px  auto;" id="i_select_files" type="primary" round></el-button>
                    <div id="i_stream_files_queue"></div>
                    <div style="margin:30px  auto  auto;">
                        <el-button type="primary" @click="_t.upload();" round>上传到服务器</el-button>
                        <el-button type="info" @click="_t.onStop();" round>暂停上传</el-button>
                        <el-button type="danger" @click="_t.onCancel();" round>取消上传</el-button>
                    </div>
                </div>
            </el-form-item>

            <el-form-item label="课程分类" prop='cate'>
                <el-select v-model="article_data.cate" @visible-change="addClass" :loading="Classs.length?false:true" placeholder="请选择课程分类">
                    <el-option v-for="item  in  Classs" :key='item._id' :value="item.classId" :label="item.className"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="课程标签" prop='tabs'>
                <el-select v-model="article_data.tabs" multiple placeholder="请选择文章标签">
                    <el-option value="html"></el-option>
                    <el-option value="css"></el-option>
                    <el-option value="javascript"></el-option>
                    <el-option value="jquery"></el-option>
                    <el-option value="vue"></el-option>
                    <el-option value="react"></el-option>
                    <el-option value="angular"></el-option>
                    <el-option value="php"></el-option>
                </el-select>
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
