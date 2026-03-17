/**
 * 数绘珠光 - 统一导航脚本
 * 处理所有页面间的跳转逻辑
 */

// 页面跳转函数
function navigateTo(pageName) {
    window.location.href = pageName + '.html';
}

// 返回上一页
function goBack() {
    if (document.referrer && document.referrer.includes('.html')) {
        window.history.back();
    } else {
        navigateTo('首页');
    }
}

// 底部导航栏点击处理
function initTabBar() {
    const tabItems = document.querySelectorAll('.tab-item, .tab-item-nav');
    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            const label = this.querySelector('.tab-label')?.textContent;
            if (!label) return;
            
            // 移除所有active类
            tabItems.forEach(t => t.classList.remove('active'));
            // 添加active类到当前点击的项
            this.classList.add('active');
            
            // 根据标签页跳转到对应页面
            switch(label) {
                case '首页':
                    navigateTo('首页');
                    break;
                case '文化馆':
                    navigateTo('文化馆');
                    break;
                case '商城':
                    navigateTo('商城列表');
                    break;
                case '设计工坊':
                    navigateTo('设计工坊');
                    break;
                case '社区':
                    navigateTo('作品社区');
                    break;
                case '我的':
                    navigateTo('个人中心');
                    break;
            }
        });
    });
}

// 快捷入口点击处理
function initQuickEntry() {
    const quickEntryItems = document.querySelectorAll('.quick-entry-item');
    quickEntryItems.forEach(item => {
        item.addEventListener('click', function() {
            const label = this.querySelector('.quick-entry-label')?.textContent;
            switch(label) {
                case '文化馆':
                    navigateTo('文化馆');
                    break;
                case '商城':
                    navigateTo('商城列表');
                    break;
                case '工坊':
                    navigateTo('设计工坊');
                    break;
                case '社区':
                    navigateTo('作品社区');
                    break;
            }
        });
    });
}

// 商品卡片点击处理
function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            navigateTo('商品详情');
        });
    });
}

// 纹样卡片点击处理
function initPatternCards() {
    const patternCards = document.querySelectorAll('.pattern-card');
    patternCards.forEach(card => {
        card.addEventListener('click', function() {
            navigateTo('纹样详情');
        });
    });
}

// 视频卡片点击处理
function initVideoCards() {
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            navigateTo('视频播放');
        });
    });
}

// 收藏按钮点击处理
function initFavoriteButtons() {
    const favoriteBtns = document.querySelectorAll('.pattern-favorite, .favorite-btn');
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
        });
    });
}

// 加入购物车按钮处理
function initAddCartButtons() {
    const addCartBtns = document.querySelectorAll('.add-cart-btn');
    addCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            // 添加到购物车动画
            this.style.transform = 'scale(0.8)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            // 显示提示
            showToast('已加入购物车');
        });
    });
}

// Toast提示
function showToast(message) {
    // 创建toast元素
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 9999;
        animation: fadeInOut 2s ease;
    `;
    
    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            15% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            85% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
        style.remove();
    }, 2000);
}

// 加载完成后初始化所有交互
document.addEventListener('DOMContentLoaded', function() {
    initTabBar();
    initQuickEntry();
    initProductCards();
    initPatternCards();
    initVideoCards();
    initFavoriteButtons();
    initAddCartButtons();
});
