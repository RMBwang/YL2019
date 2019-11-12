<template>
    <div class="footer">
			<p class="footer1">
				<a href="https://m.228.cn/notices/">最新资讯</a>
				<a href="https://m.228.cn/partner.html">合作招商</a>
				<a href="https://m.228.cn/contect.html">联系我们</a>
			</p>
			<p class="footer2">版权所有 &copy; 2003-2019 永乐票务</p>

			<p class="footer1">
				<a href="https://static.228.com.cn/resources/images/footer/yyzzfb.jpg">营业执照</a>
				<span class="black">|</span>
				<a href="https://static.228.com.cn/resources/images/footer/yyzzfb.jpg">京ICP证030942号</a>
			</p>
			<p class="footer1">
				<a href="https://static.228.com.cn/resources/images/footer/yyzzfb.jpg">京公网安备 11010102000758号</a>
			</p>
			<p class="footer1">
				<a href="https://static.228.com.cn/resources/images/footer/jyxkz.jpg">网络文化经营许可证 京网文 [2019] 3189-307
					号</a>
			</p>
			<p class="footer1">
				<a href="https://static.228.com.cn/resources/images/footer/zzdxjyxkz.jpg">增值电信经营许可证</a>
				<span class="black">|</span>
				<a href="https://static.228.com.cn/resources/images/footer/yyxycxkz.jpg">营业性演出许可证</a>
			</p>
		</div>
</template>


<script>
export default {
    name:"Center"
}
</script>


<style>
    .footer {
    height: 1.5rem;
    width: 100%;
    padding-top:.1rem;
    box-sizing: border-box;
    box-shadow: 0 -20px 15px -9px #f4f4f4 inset;
    background: #d3d3d3;
    /* position: absolute; */
    bottom: 0;
}

.footer .footer2 {
    font-size: .1rem;
    text-align: center;
    color: #82888f;
}

.footer .footer1 {
    font-size: .1rem;
    text-align: center;
    color: #82888f;
    margin-bottom: .1rem;
}

.footer .footer1 a {
    margin: 0.1rem;
    color: #82888f;
}
.black{
    color: #000;
}
</style>