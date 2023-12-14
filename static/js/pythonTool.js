function updateCode(language) {
    var selectedFunction = document.getElementById('function' + language).value;
    var codeBlock = document.getElementById('pythonCode');
    // Add code snippets based on the selected function
    switch (selectedFunction) {
        case 'function1':
            codeBlock.textContent = 'def write_to_csv(data, filename):\n' +
                '    """\n' +
                '    import csv\n' +
                '    参数:\n' +
                '    - data: 要写入的数据，以字典形式表示\n' +
                '    - filename: 要写入的CSV文件名\n' +
                '    - 可套入循环追加填写，不会被顶替\n' +
                '    """\n' +
                '    with open(filename, \'a\', newline=\'\', encoding=\'utf_8_sig\') as csvfile:\n' +
                '        fieldnames = data.keys();\n' +
                '        writer = csv.DictWriter(csvfile, fieldnames=fieldnames);\n' +
                '\n' +
                '        # 检查文件是否已存在，如果不存在，则写入标题行\n' +
                '        if csvfile.tell() == 0:\n' +
                '            writer.writeheader();  # 写入CSV文件的标题行\n' +
                '        # 写入数据\n' +
                '        writer.writerow(data);';
            break;
        case 'function2':
            codeBlock.textContent = "待更新";
            break;
        case 'function3':
            codeBlock.textContent = "待更新";
            break;
        case 'df1':
            codeBlock.textContent = 'def three_df(three_dict,one_key):\n' +
                '    """\n' +
                '    import pandas as pd\n' +
                '    import numpy as np\n' +
                '    three_dict = {\'折扣率差异\': [{\'产品1\': [{\'上海\': 0.06386}, {\'山西\': 0.10703}, {\'广东\': 0.12514}, {\'广西\': 0.05988}, {\'江苏\': 0.16797}, {\'湖北\': 0.08913}, {\'福建\': 0.1233}, {\'辽宁\': 0.09854}, {\'黑龙江\': 0.02885}]}, {\'产品2\': [{\'山西\': 0.1407}]}, {\'产品3\': [{\'福建\': 0.10699}, {\'黑龙江\': 0.15417}]}, {\'产品4\': [{\'广西\': \'nan\'}]}, {\'产品5\': [{\'上海\': 0.037}, {\'山西\': \'nan\'}, {\'辽宁\': 0.32891}]}, {\'产品6\': [{\'山西\': 0.02098}, {\'江苏\': 0.09805}]}, {\'产品7\': [{\'山西\': 0.1442}, {\'辽宁\': 0.43071}]}, {\'产品8\': [{\'上海\': 0.15848}, {\'山西\': 0.12338}, {\'辽宁\': 0.11694}]}, {\'产品9\': [{\'山西\': 0.05146}, {\'湖北\': 0.18449}, {\'福建\': 0.21252}]}, {\'胃肠安丸\': [{\'山西\': 0.11573}, {\'辽宁\': 0.50829}]}, {\'产品10\': [{\'辽宁\': 0.22681}]}, {\'产品11\': [{\'山西\': 0.24312}, {\'广东\': 0.19887}, {\'广西\': 0.26105}, {\'江苏\': 0.37729}, {\'湖北\': 0.08965}, {\'福建\': 0.29516}, {\'辽宁\': 0.06452}]}]}\n' +
                '    one_key 第一个键\n' +
                '    :return:\n' +
                '    """\n' +
                '    print(three_dict)\n' +
                '    product_dict_list = three_dict[one_key]\n' +
                '    # print(product_key_list)\n' +
                '    # 创建一个空DataFrame\n' +
                '    df = pd.DataFrame(columns=[one_key])\n' +
                '    a = 0\n' +
                '    # 循环处理不同的产品键\n' +
                '    for product_dict in product_dict_list:\n' +
                '        # a += 1\n' +
                '        if a == 2:\n' +
                '            break\n' +
                '        # 将产品的键添加到DataFrame\n' +
                '        product_df = pd.DataFrame(product_dict.keys(), columns=[\'折扣率差异\'])\n' +
                '        three_dataframe = pd.concat([df, product_df], ignore_index=True)\n' +
                '        product_key = list(product_dict)\n' +
                '        province_dict_list = product_dict[product_key[0]]\n' +
                '        for province_dict in province_dict_list:\n' +
                '            province_list = list(province_dict)\n' +
                '            three_dataframe[province_list[0]] = np.nan\n' +
                '            # print(province_list)\n' +
                '    # 打印整个DataFrame\n' +
                '    print(three_dataframe)\n' +
                '    return three_dataframe';
            break;
        case 'df2':
            codeBlock.textContent = 'def modify_province_name(province_name):\n' +
                '    if province_name in ["北京", "上海", "重庆", "天津"]:\n' +
                '        return province_name + "市"\n' +
                '    elif province_name in ["香港", "澳门"]:\n' +
                '        return province_name + "特别行政区"\n' +
                '    elif province_name in ["新疆"]:\n' +
                '        return province_name + "维吾尔自治区"\n' +
                '    elif province_name in ["广西"]:\n' +
                '        return province_name + "壮族自治区"\n' +
                '    elif province_name in ["宁夏"]:\n' +
                '        return province_name + "回族自治区"\n' +
                '    elif province_name in ["西藏", "内蒙古"]:\n' +
                '        return province_name + "自治区"\n' +
                '    elif province_name in ["黑龙"]:\n' +
                '        return province_name + "江"\n' +
                '    elif province_name in ["内蒙"]:\n' +
                '        return province_name + "古"\n' +
                '    else:\n' +
                '        return province_name + "省"';
            break;
        case 'df3':
            codeBlock.textContent = "待更新";
            break;
        case 'plt1':
            codeBlock.textContent = "plt.rcParams['font.family'] = 'SimHei'\n" +
                "plt.rcParams['axes.unicode_minus'] = False";
            break;
        case 'plt2':
            codeBlock.textContent = "rc = {'font.sans-serif': 'SimHei',\n" +
                "      'axes.unicode_minus': False}\n" +
                "sns.set(style=\"whitegrid\",rc=rc)";
            break;
        case 'plt3':
            codeBlock.textContent = "待更新";
            break;
        case 'Echarts1':
            codeBlock.textContent = 'def china_map(area, variate, is_image= False, title=" ", subtitle=""):\n' +
                '    """\n' +
                '    from pyecharts import options as opts\n' +
                '    from pyecharts. charts import Map\n' +
                '    from pyecharts. render import make_snapshot\n' +
                '    from snapshot_selenium import snapshot\n' +
                '    from pyecharts.commons.utils import JsCode\n' +
                '    import os\n' +
                '    :param area: 中国地区列表，必需全名\n' +
                '    :param variate: 对应的数值列表\n' +
                '    :param title: 地图标题\n' +
                '    :param subtitle: 地图副标题\n' +
                '    :param is_image: 是否生成图片\n' +
                '    """\n' +
                '    max_ = max(variate)\n' +
                '    step = max_ // 8  # 计算每个等份的步长\n' +
                '    range_color = [\'#aabda2\', \'#9fd088\', \'#3ba272\', \'#debc53\', \'#f17c07\', \'#ee6666\', \'#d92727\', \'#f80202\']\n' +
                '    color_max_values = [i * step for i in range(9)]\n' +
                '    pieces = [\n' +
                '        {"min": 0, "max": color_max_values[1]},\n' +
                '        {"min": color_max_values[1] + 1, "max": color_max_values[2]},\n' +
                '        {"min": color_max_values[2] + 1, "max": color_max_values[3]},\n' +
                '        {"min": color_max_values[3] + 1, "max": color_max_values[4]},\n' +
                '        {"min": color_max_values[4] + 1, "max": color_max_values[5]},\n' +
                '        {"min": color_max_values[5] + 1, "max": color_max_values[6]},\n' +
                '        {"min": color_max_values[6] + 1, "max": color_max_values[7]},\n' +
                '        {"min": color_max_values[7] + 1, "max": max_}\n' +
                '    ]\n' +
                '    # print(pieces)\n' +
                '    map_chart = (\n' +
                '        Map(init_opts=opts.InitOpts(width=\'600px\', height=\'500px\'))\n' +
                '        .add(\n' +
                '            data_pair=[list(z) for z in zip(area, variate)],\n' +
                '            maptype="china",\n' +
                '            is_map_symbol_show=False,\n' +
                '            label_opts=opts.LabelOpts(\n' +
                '                is_show=True,\n' +
                '                font_size=8,\n' +
                '                formatter=JsCode(\n' +
                '                    \'\'\'function(params) {\n' +
                '                         if (isNaN(params.value)){\n' +
                '                             return params.name.slice(0, -8);\n' +
                '                         } else {\n' +
                '                             return params.name.slice(0, -1);\n' +
                '                         }\n' +
                '                     }\'\'\'\n' +
                '                ),\n' +
                '            ),\n' +
                '            series_name=" ",\n' +
                '        )\n' +
                '        .set_global_opts(\n' +
                '            title_opts=opts.TitleOpts(\n' +
                '                title=f"{title}",\n' +
                '                subtitle=f"{subtitle}",\n' +
                '                pos_left="center",\n' +
                '                pos_top="20",\n' +
                '                title_textstyle_opts=opts.TextStyleOpts(\n' +
                '                    font_size=18,\n' +
                '                    font_family="Arial",\n' +
                '                    align="center"\n' +
                '                ),\n' +
                '                subtitle_textstyle_opts=opts.TextStyleOpts(\n' +
                '                    font_size=13,\n' +
                '                    font_family="Arial",\n' +
                '                    color="bleak",\n' +
                '                    align="center",\n' +
                '                ),\n' +
                '            ),\n' +
                '            legend_opts=opts.LegendOpts(is_show=False),\n' +
                '            tooltip_opts=opts.TooltipOpts(\n' +
                '                is_show=True,\n' +
                '                formatter="{b} : {c}",\n' +
                '            ),\n' +
                '            visualmap_opts=opts.VisualMapOpts(\n' +
                '                is_piecewise=True,\n' +
                '                dimension=0,\n' +
                '                pos_right="20",\n' +
                '                pos_top="250",\n' +
                '                range_color=range_color,\n' +
                '                pieces=pieces,\n' +
                '                max_=max_\n' +
                '            ),\n' +
                '        )\n' +
                '    )\n' +
                '    html_folder = f\'html\'\n' +
                '    os.makedirs(html_folder, exist_ok=True)  # 创建文件夹，如果文件夹已经存在则不报错\n' +
                '    map_chart.render(f\'{html_folder}/{title}.html\')\n' +
                '    print(f"{title}.html转化成功！")\n' +
                '    if is_image:\n' +
                '        print("正在转化png图片...")\n' +
                '        image_folder = f\'image\'\n' +
                '        os.makedirs(image_folder, exist_ok=True)  # 创建文件夹，如果文件夹已经存在则不报错\n' +
                '        make_snapshot(snapshot, map_chart.render(), f\'{image_folder}/title.png\')\n' +
                '        print(f"{title}.png转化成功！")';
            break;
        case 'Echarts2':
            codeBlock.textContent = 'def china_map_01(area, variate, is_image=False, title=" ", subtitle=""):\n' +
                '    # 创建地图对象，并设置初始化选项，包括宽度和高度\n' +
                '    map_chart = (\n' +
                '        Map(init_opts=opts.InitOpts(width=\'600px\', height=\'500px\'))\n' +
                '        .add(\n' +
                '            # "省份",\n' +
                '            # data_pair=[list(z) for z in zip(area, variate)],  # 数据对，包括地区和折扣率\n' +
                '            data_pair=[list(z) if z[0] else [z[0], None] for z in zip(area, variate)],  # 处理缺失值\n' +
                '            maptype="china",  # 地图类型（中国地图）\n' +
                '            is_map_symbol_show=False,  # 不显示地图标志\n' +
                '            label_opts=opts.LabelOpts(\n' +
                '                is_show=True,  # 显示省份名称\n' +
                '                font_size=8,  # 修改省份名称的字体大小\n' +
                '                formatter=JsCode(\n' +
                '                    \'\'\'function(params) {\n' +
                '                         if (isNaN(params.value)){\n' +
                '                             return params.name.slice(0, -8);\n' +
                '                         }else{return params.name.slice(0, -1);}\n' +
                '                     }\'\'\'\n' +
                '                ),\n' +
                '            ),\n' +
                '            series_name=" ",  # 系列名称\n' +
                '        )\n' +
                '        .set_global_opts(\n' +
                '            title_opts=opts.TitleOpts(\n' +
                '                title=f"{title}",  # 标题\n' +
                '                # subtitle=f"这是地图下方的文字",\n' +
                '                subtitle=f"{subtitle}",\n' +
                '                pos_left="center",\n' +
                '                pos_top="20",\n' +
                '                title_textstyle_opts=opts.TextStyleOpts(\n' +
                '                    font_size=15,\n' +
                '                    font_family="Arial",\n' +
                '                    align="right"\n' +
                '                    # font_family="Microsoft YaHei",\n' +
                '                ),\n' +
                '                subtitle_textstyle_opts=opts.TextStyleOpts(\n' +
                '                    font_size=13,  # 副标题字体大小\n' +
                '                    font_family="Arial",  # 副标题字体格式\n' +
                '                    color="bleak",  # 副标题颜色\n' +
                '                    align="center",  # 水平对齐方式\n' +
                '                ),\n' +
                '            ),\n' +
                '            legend_opts=opts.LegendOpts(is_show=False),\n' +
                '            tooltip_opts=opts.TooltipOpts(\n' +
                '                is_show=True,\n' +
                '                formatter="{b} : {c}",  # 鼠标悬停时的提示信息格式\n' +
                '            ),\n' +
                '            visualmap_opts=opts.VisualMapOpts(\n' +
                '                is_piecewise=True,  # 使用分段颜色\n' +
                '                dimension=0,  # 数据维度\n' +
                '                pos_right="40",\n' +
                '                pos_top="250",\n' +
                '\n' +
                '                pieces=[\n' +
                '                    {\'max\': 2.0, \'min\': 1.75, \'label\': \'1.75-2.0\', \'color\': "#f67e06"},\n' +
                '                    {\'max\': 1.75, \'min\': 1.5, \'label\': \'1.5-1.75\', \'color\': "#f5ac24"},\n' +
                '                    {\'max\': 1.5, \'min\': 1.25, \'label\': \'1.25-1.5\', \'color\': "#ecb165"},\n' +
                '                    {\'max\': 1.25, \'min\': 1.05, \'label\': \'1.05-1.25\', \'color\': "#efe185"},\n' +
                '                    {\'max\': 1.05, \'min\': 0.95, \'label\': \'0.95-1.05\', \'color\': "#63BE7B"},\n' +
                '                    {\'max\': 0.95, \'min\': 0.75, \'label\': \'0.75-0.95\', \'color\': "#FBD7DA"},\n' +
                '                    {\'max\': 0.75, \'min\': 0.5, \'label\': \'0.5-0.75\', \'color\': "#FAB2B5"},\n' +
                '                    {\'max\': 0.5, \'min\': 0.25, \'label\': \'0.25-0.5\', \'color\': "#F98D90"},\n' +
                '                    {\'max\': 0.25, \'min\': 0, \'label\': \'0-0.25\', \'color\': "#F8696B"}\n' +
                '                ]\n' +
                '            ),\n' +
                '\n' +
                '        )\n' +
                '    )\n' +
                '    html_folder = f\'html\'\n' +
                '    os.makedirs(html_folder, exist_ok=True)  # 创建文件夹，如果文件夹已经存在则不报错\n' +
                '    map_chart.render(f\'{html_folder}/{title}.html\')\n' +
                '    print(f"{title}.html转化成功！")\n' +
                '    if is_image:\n' +
                '        print("正在转化png图片...")\n' +
                '        image_folder = f\'image\'\n' +
                '        os.makedirs(image_folder, exist_ok=True)  # 创建文件夹，如果文件夹已经存在则不报错\n' +
                '        make_snapshot(snapshot, map_chart.render(), f\'{image_folder}/{title}.png\')\n' +
                '        print(f"{title}.png转化成功！")';
            break;
        case 'Echarts3':
            codeBlock.textContent = "def plot_stacked_bar_chart(x_axis, y_axis_list, legend_data, is_image=False, html_name=\"demo\", title=\"\", x_axis_name=\"\",\n" +
                "                           y_axis_name=\"\"):\n" +
                "    \"\"\"\n" +
                "    from pyecharts.charts import Bar\n" +
                "    from pyecharts import options as opts\n" +
                "    import os\n" +
                "    from pyecharts.render import make_snapshot\n" +
                "    from snapshot_selenium import snapshot\n" +
                "    生成堆叠条形图。\n" +
                "\n" +
                "    :param x_axis: 横坐标名称\n" +
                "    :param y_axis_list: 纵坐标值的列表，列表有几个即叠几层\n" +
                "    :param legend_data: 备注图例\n" +
                "    :param is_image: 是否转化为图片\n" +
                "    :param html_name: HTML 文件名称\n" +
                "    :param title: 图表标题\n" +
                "    :param x_axis_name: x 轴标签\n" +
                "    :param y_axis_name: y 轴标签\n" +
                "    :return: 无\n" +
                "\n" +
                "    Example:\n" +
                "    x_data = [\"A\", \"B\", \"C\", \"D\"]\n" +
                "    y_data = [[10, 20, 30, 40], [15, 25, 35, 45], [5, 15, 25, 35]]\n" +
                "    legend_labels = [\"Category 1\", \"Category 2\", \"Category 3\"]\n" +
                "\n" +
                "    plot_stacked_bar_chart(x_data, y_data, legend_labels, is_image=True, title=\"Stacked Bar Chart Example\")\n" +
                "    \"\"\"\n" +
                "    bar = Bar()\n" +
                "    bar.add_xaxis(x_axis)\n" +
                "\n" +
                "    for i, data in enumerate(y_axis_list):\n" +
                "        bar.add_yaxis(legend_data[i], data, stack=\"stack_1\")\n" +
                "\n" +
                "    bar.set_global_opts(\n" +
                "        title_opts=opts.TitleOpts(title=title),\n" +
                "        xaxis_opts=opts.AxisOpts(name=x_axis_name),\n" +
                "        yaxis_opts=opts.AxisOpts(name=y_axis_name),\n" +
                "        legend_opts=opts.LegendOpts(pos_right=\"right\", pos_top=\"top\"),\n" +
                "    )\n" +
                "\n" +
                "    html_path = f\"{html_name}.html\"\n" +
                "    bar.render(html_path)\n" +
                "    print(f\"{title}.html转化成功！\")\n" +
                "\n" +
                "    if is_image:\n" +
                "        print(\"正在转化png图片...\")\n" +
                "        image_folder = 'image'\n" +
                "        os.makedirs(image_folder, exist_ok=True)\n" +
                "        make_snapshot(snapshot, html_path, f'{image_folder}/{title}.png')\n" +
                "        print(f\"{title}.png转化成功！\")"
            break;

        // ... (其他 case 分支的代码)
    }
    Prism.highlightElement(codeBlock);
}


function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId);
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges(); // Clear previous selections
    window.getSelection().addRange(range);

    try {
        // Execute the copy command
        document.execCommand('copy');
        // Display copy success message
        var copyMessageId = elementId.replace('Code', 'CopyMessage');
        var copyMessage = document.getElementById(copyMessageId);
        copyMessage.innerHTML = '复制成功！';
    } catch (err) {
        console.error('复制失败:', err);
    } finally {
        // Clean up and clear the selection
        window.getSelection().removeAllRanges();
        // Clear the message after a short delay
        setTimeout(function () {
            copyMessage.innerHTML = '';
        }, 1500);
    }
}


// 假设您的 JSON 数据存储在变量 jsonData 中
var jsonData = {
    "categories": [
        {
            "name": "Python",
            "items": [
                {"name": "Python帮助文档", "link": "https://www.cnpython.com"},
                {"name": "pyecharts", "link": "https://pyecharts.org/#/zh-cn/datasets"},
                {"name": "代码自动生成", "link": "https://curlconverter.com"},
                {"name": "Anaconda镜像", "link": "https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/"}
            ]
        },
        // ... 其他类别的数据
    ]
};

// pythonTool.js

document.addEventListener('DOMContentLoaded', function () {

    // 使用Fetch API加载JSON文件
    fetch('../data/links.json')
        .then(response => response.json())
        .then(data => {
            // 获取包含数据的数组
            var categoryData = data.categories.find(category => category.name === categoryName).items;

            // 获取用于显示数据的 ul 元素
            var list = document.getElementById('pythonList');

            // 遍历数据并添加到列表中
            categoryData.forEach(function (item) {
                var listItem = document.createElement('li');
                var link = document.createElement('a');
                link.textContent = item.name;
                link.href = item.link;
                link.target = '_blank'; // 在新窗口中打开链接

                listItem.appendChild(link);
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
