/**
 * ==========================================================================
 * HÀO KHÍ ĐÔNG A - JAVASCRIPT DÙNG CHUNG (SHARED CONTROLLER)
 * Bộ điều khiển tương tác toàn diện cho toàn bộ 08 trang website
 * ==========================================================================
 */

(function () {
  'use strict';

  // --- 1. ĐIỀU HƯỚNG ROUTING (SHARED NAVIGATION) ---
  const currentPath = window.location.pathname;
  const isPrefixed = currentPath.includes('HaoKhiDongA_Trang_') || !currentPath.includes('.html') ? true : true;

  const PAGE_ROUTES = {
    'trang-chu': 'HaoKhiDongA_Trang_01_page-home.html',
    'home': 'HaoKhiDongA_Trang_01_page-home.html',
    'doc-truyen': 'HaoKhiDongA_Trang_02_page-reader.html',
    'reader': 'HaoKhiDongA_Trang_02_page-reader.html',
    'nhan-vat': 'HaoKhiDongA_Trang_03_page-characters.html',
    'characters': 'HaoKhiDongA_Trang_03_page-characters.html',
    'su-kien': 'HaoKhiDongA_Trang_04_page-events.html',
    'events': 'HaoKhiDongA_Trang_04_page-events.html',
    'boi-canh': 'HaoKhiDongA_Trang_05_page-context.html',
    'context': 'HaoKhiDongA_Trang_05_page-context.html',
    'tu-lieu': 'HaoKhiDongA_Trang_06_page-artifacts.html',
    'artifacts': 'HaoKhiDongA_Trang_06_page-artifacts.html',
    'soi-hien-vat': 'HaoKhiDongA_Trang_07_page-inspector.html',
    'inspector': 'HaoKhiDongA_Trang_07_page-inspector.html',
    'trac-nghiem': 'HaoKhiDongA_Trang_08_page-quiz.html',
    'quiz': 'HaoKhiDongA_Trang_08_page-quiz.html',
    'figma-prototype': 'figma-prototype'
  };

  window.navigateTo = function (pageKey) {
    if (pageKey === 'figma-prototype') {
      window.openPrototypeModal();
      return;
    }
    const target = PAGE_ROUTES[pageKey];
    if (target) {
      window.location.href = target;
    } else {
      console.warn('Không tìm thấy tuyến đường cho trang:', pageKey);
    }
  };

  // --- 2. MODAL DANH SÁCH 8 TRANG (PROTOTYPE SWITCHER) ---
  window.openPrototypeModal = function () {
    let modal = document.getElementById('figma-prototype-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'figma-prototype-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in';
      modal.innerHTML = `
        <div class="bg-[#FAF7F0] border-2 border-[#D4A359] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
          <button onclick="window.closePrototypeModal()" class="absolute top-4 right-4 text-2xl font-bold text-[#8B1E1E] hover:opacity-75 cursor-pointer">&times;</button>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold uppercase tracking-wider text-[#8B1E1E]">📦 Trung Tâm Điều Hướng 8 Trang</span>
          </div>
          <h2 class="font-heading font-black text-2xl text-[#1C1917] mb-2">HÀO KHÍ ĐÔNG A · TRỌN BỘ 08 TRANG</h2>
          <p class="text-xs text-[#57534E] mb-6">Chọn bất kỳ trang nào để chuyển hướng ngay lập tức:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button onclick="window.navigateTo('trang-chu')" class="text-left p-3 rounded-lg border border-[#D4A359]/40 bg-white hover:border-[#8B1E1E] hover:bg-[#8B1E1E]/5 transition-all">
              <span class="text-[10px] font-bold text-[#8B1E1E] block">TRANG 01</span>
              <span class="text-sm font-bold text-[#1C1917]">Trang Chủ (Master Home)</span>
            </button>
            <button onclick="window.navigateTo('doc-truyen')" class="text-left p-3 rounded-lg border border-[#D4A359]/40 bg-white hover:border-[#8B1E1E] hover:bg-[#8B1E1E]/5 transition-all">
              <span class="text-[10px] font-bold text-[#8B1E1E] block">TRANG 02</span>
              <span class="text-sm font-bold text-[#1C1917]">Đọc Truyện Tranh (Comic Reader)</span>
            </button>
            <button onclick="window.navigateTo('nhan-vat')" class="text-left p-3 rounded-lg border border-[#D4A359]/40 bg-white hover:border-[#8B1E1E] hover:bg-[#8B1E1E]/5 transition-all">
              <span class="text-[10px] font-bold text-[#8B1E1E] block">TRANG 03</span>
              <span class="text-sm font-bold text-[#1C1917]">Nhân Vật Anh Hùng Thời Trần</span>
            </button>
            <button onclick="window.navigateTo('su-kien')" class="text-left p-3 rounded-lg border border-[#D4A359]/40 bg-white hover:border-[#8B1E1E] hover:bg-[#8B1E1E]/5 transition-all">
              <span class="text-[10px] font-bold text-[#8B1E1E] block">TRANG 04</span>
              <span class="text-sm font-bold text-[#1C1917]">Sự Kiện & Chiến Trận Thời Trần</span>
            </button>
            <button onclick="window.navigateTo('boi-canh')" class="text-left p-3 rounded-lg border border-[#D4A359]/40 bg-white hover:border-[#8B1E1E] hover:bg-[#8B1E1E]/5 transition-all">
              <span class="text-[10px] font-bold text-[#8B1E1E] block">TRANG 05</span>
              <span class="text-sm font-bold text-[#1C1917]">Bối Cảnh Lịch Sử & Xã Tắc</span>
            </button>
            <button onclick="window.navigateTo('tu-lieu')" class="text-left p-3 rounded-lg border border-[#D4A359]/40 bg-white hover:border-[#8B1E1E] hover:bg-[#8B1E1E]/5 transition-all">
              <span class="text-[10px] font-bold text-[#8B1E1E] block">TRANG 06</span>
              <span class="text-sm font-bold text-[#1C1917]">Tư Liệu Hiện Vật Khảo Cổ</span>
            </button>
            <button onclick="window.navigateTo('soi-hien-vat')" class="text-left p-3 rounded-lg border border-[#D4A359]/40 bg-white hover:border-[#8B1E1E] hover:bg-[#8B1E1E]/5 transition-all">
              <span class="text-[10px] font-bold text-[#8B1E1E] block">TRANG 07</span>
              <span class="text-sm font-bold text-[#1C1917]">Phòng Giám Định Cổ Vật 360°</span>
            </button>
            <button onclick="window.navigateTo('trac-nghiem')" class="text-left p-3 rounded-lg border border-[#D4A359]/40 bg-white hover:border-[#8B1E1E] hover:bg-[#8B1E1E]/5 transition-all">
              <span class="text-[10px] font-bold text-[#8B1E1E] block">TRANG 08</span>
              <span class="text-sm font-bold text-[#1C1917]">Thử Tài Sử Học (Trắc Nghiệm)</span>
            </button>
          </div>
          <div class="mt-6 pt-4 border-t border-[#D4A359]/30 text-center">
            <button onclick="window.closePrototypeModal()" class="px-5 py-2 bg-[#8B1E1E] text-white text-xs font-bold rounded-lg hover:bg-[#701616]">Đóng cửa sổ</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
    modal.classList.remove('hidden');
  };

  window.closePrototypeModal = function () {
    const modal = document.getElementById('figma-prototype-modal');
    if (modal) modal.classList.add('hidden');
  };

  // --- 3. ĐỌC TRUYỆN TRANH CUỘN DỌC PHONG CÁCH HÀN QUỐC (PAGE 02 - KOREAN WEBTOON CONTINUOUS SCROLL READER) ---
  const COMIC_CHAPTERS = {
    'chap-1': {
      id: 'chap-1',
      chapterNum: 1,
      title: 'Hồi 1: Bình Than Dậy Sóng - Bóp Nát Quả Cam Sành',
      subtitle: 'Ý chí thiếu niên & Hội nghị bàn kế giữ nước năm 1282',
      epoch: 'Tháng 10 năm 1282 · Bến Bình Than (Hải Dương)',
      summary: 'Đứng trước họa xâm lăng của 50 vạn quân Nguyên Mông hung hãn, vua tôi nhà Trần mở đại hội nghị quân sự tại bến Bình Than. Hoài Văn Hầu Trần Quốc Toản vì còn nhỏ tuổi không được vào dự bàn, uất ức bóp nát quả cam sành vua ban, tự chiêu mộ hơn ngàn gia binh thêu cờ sáu chữ vàng xung trận lập chiến công hiển hách.',
      historicalNote: 'Hội nghị Bình Than năm 1282 là bước ngoặt quyết định thể hiện sự thống nhất ý chí của tầng lớp quý tộc lãnh đạo triều Trần, kết hợp cùng hào khí quật cường của thế hệ thanh niên tuổi trẻ cứu nước mà biểu tượng bất tử là Trần Quốc Toản.',
      nextChapId: 'chap-2',
      nextChapTitle: 'Hồi 2: Hào Khí Diên Hồng - Muôn Người Cùng Hô Đánh',
      artifacts: [
        { id: 'thap-gom-hoa-nau', title: 'Thạp Gốm Hoa Nâu Chạm Khắc Võ Sĩ', tag: 'Gốm sứ hoàng gia', desc: 'Thế kỷ XIII - XIV · Bảo vật Quốc gia', img: 'images/artifact_thap_gom_hoanau_1792135273950.jpg' },
        { id: 'kiem-lenh-nha-tran', title: 'Thanh Kiếm Lệnh & Hổ Phù Triều Trần', tag: 'Quân khí chỉ huy', desc: 'Thế kỷ XIII · Binh khí rèn thủ công', img: 'images/comic_page_tranquoctoan_1792135273832-.jpg' }
      ],
      pages: [
        {
          id: 'p1-1',
          title: 'Khung 1: Bến Bình Than Rợp Bóng Thuyền Rồng',
          speaker: 'Vua Trần Nhân Tông',
          dialogue: '"Quân giặc trăm vạn, thế như nước lũ chực nuốt chửng giang sơn. Các khanh hãy vì trăm họ mà cùng trẫm đồng tâm giữ nước!"',
          sfx: 'Gió rít bến sông... Sóng nước Lục Đầu giận dữ!',
          desc: 'Tháng 10 năm 1282, vua Trần Nhân Tông ngự thuyền rồng ra bến Bình Than họp bàn với chư vương và trăm quan. Thuyền bè san sát, cờ xí rợp trời, một bầu không khí trang nghiêm và quyết liệt bao trùm sông nước.',
          hotspots: [
            { id: 'hs-thuyen', title: 'Thuyền rồng vua Trần', top: '24%', left: '32%', detail: 'Bến Bình Than năm 1282 - Nơi tụ họp thuyền rồng hoàng gia của vua tôi nhà Trần để định đoạt kế sách sinh tử cho xã tắc.', relicKey: 'kiem-lenh-nha-tran' },
            { id: 'hs-quancanh', title: 'Cờ lệnh chư vương hội tụ', top: '42%', left: '72%', detail: 'Hàng trăm chiến thuyền cùng cờ hiệu của các quý tộc tôn thất nhà Trần tề tựu, biểu thị tinh thần đồng lòng kháng chiến.', relicKey: 'thap-gom-hoa-nau' }
          ]
        },
        {
          id: 'p1-2',
          title: 'Khung 2: Nỗi Uất Hận Thiếu Niên & Quả Cam Bị Bóp Nát',
          speaker: 'Hoài Văn Hầu Trần Quốc Toản',
          dialogue: '"Vua ban cam quý cho bầy tôi bàn việc lớn, ta vì còn nhỏ tuổi không được vào dự bàn, căm giận vô cùng!"',
          sfx: 'RĂNG RẮC... NƯỚC CAM TRÀO QUA KẼ TAY!',
          desc: 'Hoài Văn Hầu khi ấy mới 15 tuổi, nóng lòng xin đánh nhưng bị lính canh cản lại vì chưa đến tuổi thành niên. Đức vua thương chàng trẻ tuổi mà khẳng khái nên ban quả cam sành an ủi. Vì căm giận lũ giặc dữ và uất ức chưa được dự bàn, chàng siết chặt tay bóp nát quả cam lúc nào không hay.',
          hotspots: [
            { id: 'hs-cam', title: 'Quả cam sành Bình Than', top: '56%', left: '49%', detail: 'Quả cam sành vỏ dày, thơm ngọt được vua Trần Nhân Tông ban tặng, trở thành biểu tượng cho ngọn lửa sục sôi nhiệt huyết của tuổi trẻ cứu nước.', relicKey: 'kiem-lenh-nha-tran' },
            { id: 'hs-chienbao', title: 'Chiến bào nhung phục thiếu niên', top: '75%', left: '26%', detail: 'Nhung phục của võ tướng Đại Việt thời Trần, gọn gàng cơ động thích hợp với địa hình sông nước đầm lầy.', relicKey: 'thap-gom-hoa-nau' }
          ]
        },
        {
          id: 'p1-3',
          title: 'Khung 3: Lá Cờ Thêu Sáu Chữ Vàng Sáng Rực Non Sông',
          speaker: 'Hoài Văn Hầu & Nghĩa binh',
          dialogue: '"PHÁ CƯỜNG ĐỊCH, BÁO HOÀNG ÂN! Giang sơn hữu hạn, quyết đem thân mình đền nợ nước!"',
          sfx: 'PHẤP PHỚI... NGỌN CỜ ĐẠI NGHĨA RỰC ĐỎ GÓC TRỜI!',
          desc: 'Trở về trang ấp, Trần Quốc Toản đem hết gia sản chiêu mộ hơn một nghìn gia binh tráng đinh thân thuộc. Chàng tự tay cắt lụa đỏ may lá cờ lớn thêu sáu chữ vàng "Phá Cường Địch, Báo Hoàng Ân", ngày đêm luyện tập võ nghệ sẵn sàng diệt giặc.',
          hotspots: [
            { id: 'hs-co-sau-chu', title: 'Lá cờ "Phá Cường Địch Báo Hoàng Ân"', top: '32%', left: '16%', detail: 'Lá cờ thêu sáu chữ vàng chấn động non sông, biểu tượng bất tử của tinh thần yêu nước quật cường tuổi trẻ Việt Nam.', relicKey: 'kiem-lenh-nha-tran' },
            { id: 'hs-giabinh', title: 'Đội gia binh Đại Việt', top: '78%', left: '80%', detail: 'Hơn một nghìn tráng sĩ thiện chiến, trung thành tuyệt đối, được rèn luyện cung đao kỹ càng để làm mũi nhọn đột kích.', relicKey: 'thap-gom-hoa-nau' }
          ]
        },
        {
          id: 'p1-4',
          title: 'Khung 4: Phi Ngựa Xông Trận - Chém Tướng Đoạt Cờ',
          speaker: 'Trần Quốc Toản',
          dialogue: '"Quân giặc bạo tàn, hãy xem ngọn thương của Đại Việt!" - Hoài Văn Hầu hét vang xông thẳng vào trùng vây giặc dữ.',
          sfx: 'KENG! BẦM... VÓ NGỰA THẦN TỐC XÉ NÁT CHIẾN TUYẾN!',
          desc: 'Khi quân xâm lược tràn vào, Hoài Văn Hầu dẫn đạo quân sáu chữ vàng xung trận dũng mãnh, một ngọn trường thương đâm nhào kỵ binh Mông Cổ, phá tan trận tuyến, chém tướng giặc cứu nguy cho đại quân triều đình.',
          hotspots: [
            { id: 'hs-tuong-quan', title: 'Hoài Văn Hầu cưỡi tuấn mã đen', top: '25%', left: '68%', detail: 'Trần Quốc Toản uy phong lẫm liệt, tay cầm trường thương thép tôi rèn, cưỡi thần mã phi như gió lốc giữa làn tên mũi giáo.', relicKey: 'kiem-lenh-nha-tran' },
            { id: 'hs-giac-nga', title: 'Tướng giặc Nguyên ngã ngựa', top: '68%', left: '22%', detail: 'Tướng giặc trang bị giáp sắt hạng nặng Mông Cổ nhưng đại bại trước thế trận biến hóa và ngọn thương thần tốc của Hoài Văn Hầu.', relicKey: 'thap-gom-hoa-nau' },
            { id: 'hs-khien-dong', title: 'Khiên đồng & Kiếm lệnh thời Trần', top: '82%', left: '44%', detail: 'Khiên đồng chạm khắc hoa văn sóng nước đặc trưng thời Trần và kiếm lệnh chỉ huy bằng thép tôi đa tầng sắc bén.', relicKey: 'kiem-lenh-nha-tran' }
          ]
        }
      ]
    },
    'chap-2': {
      id: 'chap-2',
      chapterNum: 2,
      title: 'Hồi 2: Hào Khí Diên Hồng - Muôn Người Cùng Hô Đánh',
      subtitle: 'Ý chí muôn dân muôn người như một trước thềm đại chiến năm 1284',
      epoch: 'Tháng Chạp năm 1284 · Thềm Điện Diên Hồng (Thăng Long)',
      summary: 'Đầu năm 1285, 50 vạn quân Nguyên Mông do Thoát Hoan chỉ huy ồ ạt tràn vào biên giới. Thượng hoàng Trần Thánh Tông triệu tập hội nghị Diên Hồng hỏi ý kiến các bô lão: Nên hòa hay nên đánh? Hàng triệu tiếng hô vang dậy đất trời: "ĐÁNH!". Tiết chế Trần Quốc Tuấn viết Hịch Tướng Sĩ, toàn quân xăm chữ "Sát Thát" thề quyết tử giữ gìn từng tấc đất quê hương.',
      historicalNote: 'Hội nghị Diên Hồng là hội nghị dân chủ đầu tiên trong lịch sử Việt Nam, thể hiện chân lý sáng ngời: Sức mạnh bảo vệ tổ quốc bắt nguồn từ sự đồng lòng của muôn dân trăm họ, vua tôi đồng lòng, anh em hòa mục, cả nước góp sức.',
      nextChapId: 'chap-3',
      nextChapTitle: 'Hồi 3: Bão Lửa Bạch Đằng - Chôn Vùi Thủy Binh Ô Mã Nhi',
      artifacts: [
        { id: 'thap-gom-hoa-nau', title: 'Thạp Gốm Hoa Nâu Chạm Khắc Võ Sĩ', tag: 'Bảo vật Quốc gia', desc: 'Thế kỷ XIII - XIV · Nghệ thuật chạm khắc thời Trần', img: 'images/artifact_thap_gom_hoanau_1792135273950.jpg' },
        { id: 'dau-rong-hoang-thanh', title: 'Đầu Rồng Đất Nung Hoàng Thành Thăng Long', tag: 'Kiến trúc hoàng cung', desc: 'Thế kỷ XIII · Biểu tượng uy quyền vương triều', img: 'images/artifact_dau_rong_lade_1792135273755.jpg' }
      ],
      pages: [
        {
          id: 'p2-1',
          title: 'Khung 1: Mây Đen Biên Ải - Giặc Dữ Áp Sát Thăng Long',
          speaker: 'Sứ thần & Tướng biên ải',
          dialogue: '"Binh lực Bắc triều đông như kiến cỏ, khí thế hung hãn san bằng ải Mục Nam Quan, xin triều đình sớm hạ chỉ định đoạt!"',
          sfx: 'RẦM RẦM... TIẾNG TRỐNG TRẬN BIÊN THÙY!',
          desc: 'Đầu năm 1285, Thoát Hoan chỉ huy 50 vạn đại quân Nguyên Mông chia làm nhiều mũi tràn vào nước ta. Thế giặc cực kỳ hung hãn, lửa cháy ngút ngàn biên cương, xã tắc ngàn cân treo sợi tóc.',
          hotspots: [
            { id: 'hs-bienai', title: 'Khói lửa ải biên cương', top: '22%', left: '24%', detail: 'Ải biên thùy hiểm trở nơi quân dân Đại Việt kiên cường chặn giặc để bảo toàn lực lượng chủ lực rút lui chiến lược.', relicKey: 'dau-rong-hoang-thanh' },
            { id: 'hs-kinhthanh', title: 'Kinh thành Thăng Long trước đại chiến', top: '44%', left: '82%', detail: 'Hoàng thành Thăng Long chuẩn bị sẵn sàng thực hiện kế sách "Vườn không nhà trống" lịch sử.', relicKey: 'thap-gom-hoa-nau' }
          ]
        },
        {
          id: 'p2-2',
          title: 'Khung 2: Tiếng Hô "ĐÁNH!" Rung Chuyển Điện Diên Hồng',
          speaker: 'Các Bô Lão Cả Nước',
          dialogue: '"ĐÁNH! THÀ CHẾT VINH CÒN HƠN SỐNG NHỤC! Xin Bệ hạ hạ lệnh cho chúng tôi ra trận!"',
          sfx: 'SẤM VANG! ĐÁNH! ĐÁNH! ĐÁNH!',
          desc: 'Thượng hoàng Trần Thánh Tông triệu họp các bô lão khắp mọi miền đất nước tại điện Diên Hồng, ban yến và hỏi kế sách. Hàng ngàn cánh tay già nua nhưng gân guốc cùng vung lên, tiếng hô "ĐÁNH!" chấn động trời cao, đập tan mọi mưu toan khuất phục.',
          hotspots: [
            { id: 'hs-dienhong', title: 'Thềm Điện Diên Hồng', top: '35%', left: '48%', detail: 'Biểu tượng tối cao của tinh thần đại đoàn kết dân tộc và nền dân chủ sơ khai rực rỡ thời Trần.', relicKey: 'dau-rong-hoang-thanh' },
            { id: 'hs-bolao', title: 'Các bô lão anh minh', top: '65%', left: '70%', detail: 'Đại diện cho ý chí quật cường của nhân dân trăm họ Đại Việt, không chịu cúi đầu trước bất kỳ thế lực ngoại xâm nào.', relicKey: 'thap-gom-hoa-nau' }
          ]
        },
        {
          id: 'p2-3',
          title: 'Khung 3: Thiên Cổ Hùng Văn Hịch Tướng Sĩ',
          speaker: 'Tiết chế Quốc công Trần Quốc Tuấn',
          dialogue: '"Ta thường tới bữa quên ăn, nửa đêm vỗ gối, ruột đau như cắt, nước mắt đầm đìa, chỉ căm tức chưa xả thịt lột da nuốt gan uống máu quân thù!"',
          sfx: 'RỰC CHÁY... NGỌN LỬA HÙNG TÂM TRONG TIM CHIẾN SĨ!',
          desc: 'Quốc công Tiết chế Trần Hưng Đạo ban bố bài Hịch Tướng Sĩ bất hủ truyền khắp doanh trại. Từng câu chữ thấm đẫm chí khí oai hùng khiến ba quân tướng sĩ rơi lệ căm hờn, đồng lòng thề sống chết với non sông.',
          hotspots: [
            { id: 'hs-hich', title: 'Thiên cổ hùng văn Hịch Tướng Sĩ', top: '30%', left: '35%', detail: 'Tác phẩm quân sự và văn học mẫu mực bậc nhất, khơi dậy mãnh liệt hào khí Đông A và ý thức tự tôn độc lập.', relicKey: 'thap-gom-hoa-nau' },
            { id: 'hs-vosithantran', title: 'Hình khắc võ sĩ Đại Việt', top: '62%', left: '50%', detail: 'Võ sĩ thời Trần mình trần, xăm trổ, cởi trần đóng khố lướt sóng chém giặc như thần, được khắc họa chân thực trên thân thạp gốm hoa nâu.', relicKey: 'thap-gom-hoa-nau' }
          ]
        },
        {
          id: 'p2-4',
          title: 'Khung 4: Lời Thề Sát Thát & Kế Sách Vườn Không Nhà Trống',
          speaker: 'Quân dân Đại Việt',
          dialogue: '"SÁT THÁT! Đầu tôi chưa rơi xuống đất, xin bệ hạ đừng lo!" - Lời thề đanh thép của Thái sư Trần Thủ Độ.',
          sfx: 'KEN KÉT... MŨI KIM XĂM KHẮC LỜI THỀ BẤT TỬ!',
          desc: 'Toàn quân nhất tề xăm lên cánh tay hai chữ "Sát Thát". Triều đình thực hiện kế sách "Vườn không nhà trống", triệt thoái khỏi kinh đô khiến giặc Nguyên đói khát rơi vào thế bị động, mở đường cho cuộc phản công đại thắng tại Chương Dương, Hàm Tử, Tây Kết.',
          hotspots: [
            { id: 'hs-sathat', title: 'Hình xăm Sát Thát trên cánh tay', top: '60%', left: '55%', detail: 'Lời thề diệt giặc Thát Đát bất diệt của các chiến binh dũng cảm, thể hiện quyết tâm sắt đá không bao giờ đầu hàng.', relicKey: 'thap-gom-hoa-nau' },
            { id: 'hs-kiemlenh', title: 'Gươm lệnh chỉ huy', top: '80%', left: '30%', detail: 'Binh khí chỉ huy của tướng soái Đại Việt, biểu tượng cho quyền uy và kỷ luật thép của quân đội nhà Trần.', relicKey: 'dau-rong-hoang-thanh' }
          ]
        }
      ]
    },
    'chap-3': {
      id: 'chap-3',
      chapterNum: 3,
      title: 'Hồi 3: Bão Lửa Bạch Đằng - Chôn Vùi Thủy Binh Ô Mã Nhi',
      subtitle: 'Trận thủy chiến định mệnh kết thúc cuộc xâm lược năm 1288',
      epoch: 'Tháng 4 năm 1288 · Sông Bạch Đằng (Quảng Ninh - Hải Phòng)',
      summary: 'Mùa xuân năm 1288, cuộc xâm lược lần thứ ba của quân Nguyên bị bẻ gãy. Thoát Hoan chia quân rút chạy theo hai ngả thủy bộ. Trên dòng sông Bạch Đằng cuồn cuộn sóng gió, Hưng Đạo Vương Trần Quốc Tuấn bố trí trận địa cọc ngầm kết hợp thủy triều, nhấn chìm hơn 600 thuyền giặc, bắt sống Ô Mã Nhi, khải hoàn ca thái bình muôn thuở.',
      historicalNote: 'Chiến thắng Bạch Đằng năm 1288 là đỉnh cao nghệ thuật quân sự Đại Việt, chôn vùi vĩnh viễn mộng xâm lăng của đế chế Mông Nguyên hùng mạnh nhất thế giới thời bấy giờ, khẳng định vị thế độc lập tự chủ ngàn năm của dân tộc.',
      nextChapId: null,
      nextChapTitle: null,
      artifacts: [
        { id: 'dau-rong-hoang-thanh', title: 'Đầu Rồng Đất Nung Hoàng Thành Thăng Long', tag: 'Bảo vật Quốc gia', desc: 'Thế kỷ XIII · Biểu tượng hòa bình khải hoàn', img: 'images/artifact_dau_rong_lade_1792135273755.jpg' },
        { id: 'kiem-lenh-nha-tran', title: 'Thanh Kiếm Lệnh & Hổ Phù Triều Trần', tag: 'Quân khí chỉ huy', desc: 'Thế kỷ XIII · Chiến tích Bạch Đằng oanh liệt', img: 'images/comic_page_tranquoctoan_1792135273832-.jpg' }
      ],
      pages: [
        {
          id: 'p3-1',
          title: 'Khung 1: Bố Trí Bãi Cọc Ngầm Dưới Đáy Sông Bạch Đằng',
          speaker: 'Trần Quốc Tuấn',
          dialogue: '"Nắm chắc quy luật con nước, khi triều dâng giấu cọc sâu trong nước, khi triều rút bãi cọc nhô lên xé toạc bụng thuyền giặc!"',
          sfx: 'ÙM... ÙM... HÀNG VẠN THÂN LIM CẮM SÂU ĐÁY BÙN!',
          desc: 'Hiểu rõ dòng chảy và quy luật thủy triều sông Bạch Đằng, Tiết chế Trần Quốc Tuấn huy động quân dân đẵn hàng vạn cây gỗ lim vót nhọn, bịt sắt cắm ngầm ở các cửa sông hiểm yếu, giăng bẫy chờ đoàn thuyền chiến của Ô Mã Nhi.',
          hotspots: [
            { id: 'hs-coc', title: 'Trận địa cọc gỗ lim Bạch Đằng', top: '75%', left: '35%', detail: 'Những thân gỗ lim cổ thụ vót nhọn, cắm nghiêng theo hướng nước xuôi, trở thành cái bẫy chết người tiêu diệt đạo thủy binh khổng lồ của giặc.', relicKey: 'kiem-lenh-nha-tran' },
            { id: 'hs-thuytrieu', title: 'Dòng nước thủy triều Bạch Đằng', top: '50%', left: '20%', detail: 'Địa thế sông ngòi hiểm trở với mức chênh lệch triều lên xuống cực lớn được quân đội Đại Việt tận dụng tài tình.', relicKey: 'dau-rong-hoang-thanh' }
          ]
        },
        {
          id: 'p3-2',
          title: 'Khung 2: Mồi Nhử & Đạo Thủy Binh Lọt Ổ Phục Kích',
          speaker: 'Tướng giặc Ô Mã Nhi & Thủy quân Nam',
          dialogue: '"Ô Mã Nhi hò hét: Thuyền Nam bỏ chạy rồi, toàn quân dốc sức đuổi bắt! Thủy quân Nam: Nhử giặc vào sâu hơn nữa!"',
          sfx: 'ÀO ÀO... NƯỚC TRIỀU BẮT ĐẦU RÚT XUỐNG!',
          desc: 'Sáng ngày 9-4-1288, thuyền chiến Ô Mã Nhi hùng hổ tiến vào sông. Thủy quân Đại Việt vờ thua tháo chạy. Đợi lúc nước triều đạt đỉnh rồi rút mạnh, thuyền ta quay đầu quyết chiến, dồn toàn bộ hạm đội giặc vào đúng trận địa cọc ngầm.',
          hotspots: [
            { id: 'hs-omanhi', title: 'Chiến thuyền Ô Mã Nhi bị xé nát', top: '40%', left: '60%', detail: 'Soái thuyền kiêu hãnh của tướng giặc Ô Mã Nhi đâm sầm vào đầu cọc lim nhọn hoắt, thủng đáy và nghiêng ngả giữa dòng nước dữ.', relicKey: 'kiem-lenh-nha-tran' },
            { id: 'hs-thuyenchien', title: 'Hạm đội giặc kẹt cứng', top: '65%', left: '75%', detail: 'Hơn 600 thuyền giặc chen lấn xô đẩy nhau, vỡ toác khi va phải các thân cọc lim từ từ nhô lên khỏi mặt nước.', relicKey: 'dau-rong-hoang-thanh' }
          ]
        },
        {
          id: 'p3-3',
          title: 'Khung 3: Bão Lửa Bạch Đằng - Nhấn Chìm 600 Chiến Thuyền',
          speaker: 'Trần Quốc Tuấn & Tướng sĩ',
          dialogue: '"Nước triều đã rút cạn! Toàn quân xung phong! Bắt sống Ô Mã Nhi đền mạng cho dân lành!"',
          sfx: 'ÙNG OÀNH... BÃO LỬA BỐN BỀ RỰC SÁNG TRỜI ĐÊM!',
          desc: 'Đúng thời khắc vàng, phục binh Đại Việt từ hai bên bờ phóng hỏa tiễn, cho thuyền lửa xông thẳng vào thiêu rụi thuyền giặc. Tướng Yết Kiêu cùng toán quân lặn đục thủng đáy thuyền. Toàn bộ hạm đội giặc bị tiêu diệt, Ô Mã Nhi và Phàn Tiếp bị bắt sống tại trận.',
          hotspots: [
            { id: 'hs-yetkieu', title: 'Dũng sĩ lặn đục thuyền Yết Kiêu', top: '85%', left: '45%', detail: 'Gia tướng Yết Kiêu với tài bơi lặn siêu phàm, thoắt ẩn thoắt hiện dưới dòng nước đục thủng thuyền giặc khiến chúng kinh hồn bạt vía.', relicKey: 'kiem-lenh-nha-tran' },
            { id: 'hs-hoatien', title: 'Mũi tên lửa Đại Việt', top: '30%', left: '70%', detail: 'Hỏa tiễn cải tiến mang chất cháy cực mạnh, biến lòng sông Bạch Đằng thành một biển lửa thiêu rụi quân xâm lăng.', relicKey: 'dau-rong-hoang-thanh' }
          ]
        },
        {
          id: 'p3-4',
          title: 'Khung 4: Khải Hoàn Thăng Long - Non Sông Vững Âu Vàng',
          speaker: 'Vua Trần Nhân Tông',
          dialogue: '"Xã tắc hai phen chồn ngựa đá · Non sông nghìn thuở vững âu vàng"',
          sfx: 'TÙNG TÙNG TÙNG... TRỐNG HỘI THĂNG LONG RỘN RÃ NON SÔNG!',
          desc: 'Chiến thắng Bạch Đằng năm 1288 đập tan hoàn toàn cuộc xâm lăng của đế quốc Mông Nguyên. Vua tôi nhà Trần làm lễ tế trời đất tổ tiên tại Chiêu Lăng, đón mừng nền hòa bình thịnh trị rực rỡ muôn thuở.',
          hotspots: [
            { id: 'hs-thanglong', title: 'Hoàng thành Thăng Long ngày khải hoàn', top: '30%', left: '45%', detail: 'Kinh đô rợp bóng cờ hoa đón mừng đoàn quân chiến thắng trở về trong tiếng hoan hô ngút trời của nhân dân.', relicKey: 'dau-rong-hoang-thanh' },
            { id: 'hs-auvang', title: 'Đầu rồng lá đề mái cung điện', top: '65%', left: '50%', detail: 'Bảo vật đất nung thời Trần với hình tượng rồng uy nghiêm uốn lượn, minh chứng cho thời kỳ phục hưng văn hóa Đại Việt đỉnh cao.', relicKey: 'dau-rong-hoang-thanh' }
          ]
        }
      ]
    }
  };

  let currentChapterId = 'chap-1';
  let activeChapterIds = ['chap-1'];
  let hotspotsVisible = true;
  let isWebtoonDarkMode = false;
  let webtoonWidthMode = 'standard';
  let isFullscreenActive = false;

  // RENDER TRANG TRUYỆN DẠNG CUỘN DỌC WEBTOON
  function renderPageItemHTML(p, chap) {
    const hotspotsHTML = (chap.notesOnly ? [] : p.hotspots || []).map(hs => `
      <button
        onclick="window.selectHotspot('${hs.id}', '${p.id}')"
        style="top: ${hs.top}; left: ${hs.left};"
        class="webtoon-hotspot absolute transform -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-none cursor-pointer group/point ${hotspotsVisible ? '' : 'hidden'}"
        title="${hs.title}"
        data-hs-id="${hs.id}"
      >
        <span class="relative flex h-7 w-7 items-center justify-center">
          <span class="animate-son-ping absolute inline-flex h-full w-full rounded-full bg-[#8B1E1E] opacity-75"></span>
          <span class="relative inline-flex items-center justify-center rounded-full h-6 w-6 bg-[#8B1E1E] text-white border-2 border-[#D4A359] text-[10px] font-black shadow-md hover:scale-110 transition-transform">
            ✦
          </span>
        </span>
        <span class="opacity-0 group-hover/point:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2.5 py-1 text-[11px] font-bold text-white bg-[#1C1917]/90 rounded whitespace-nowrap pointer-events-none shadow-md z-30">
          ${hs.title}
        </span>
      </button>
    `).join('');

    return `
      <article
        id="page-card-${p.id}"
        class="webtoon-page-card webtoon-strip-section scroll-mt-28"
        data-chapter-id="${chap.id}"
        data-page-id="${p.id}"
        data-page-idx="${p.pageIdx}"
      >
        <div class="webtoon-page-frame relative w-full group">
          ${p.image.outerHTML}
          ${hotspotsHTML ? `
            <div class="hotspots-layer absolute inset-0">
              ${hotspotsHTML}
            </div>
            <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-[11px] px-2.5 py-1 rounded backdrop-blur-xs pointer-events-none">
              🔍 Nhấp điểm ✦ để soi hiện vật
            </div>
          ` : ''}
        </div>
      </article>
    `;
  }

  // Đặt lời thoại và tư liệu sau dải ảnh để các trang tranh nối liền nhau.
  function renderChapterNotesHTML(chap) {
    const notePages = chap.pages.filter((page, index, pages) => (
      page.dialogue && pages.findIndex(item => item.dialogue === page.dialogue) === index
    ));
    const notesHTML = notePages.map(p => `
        <div class="p-4 sm:p-5 space-y-3 webtoon-dialogue-box">
          <h4 class="text-sm font-bold text-[#8B1E1E]">${p.title}</h4>

          <!-- Lời thoại nhân vật -->
          <div class="p-3.5 bg-gradient-to-r from-[#FAF7F0] to-[#F5ECE1] rounded-xl border border-[#D4A359]/40 shadow-xs relative">
            <div class="flex items-center gap-2 mb-1.5">
              <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#8B1E1E] text-white text-[10px] font-bold">🗣</span>
              <span class="text-xs font-bold text-[#8B1E1E] tracking-wide uppercase">${p.speaker}</span>
            </div>
            <p class="font-heading font-bold text-xs sm:text-sm text-[#1C1917] leading-relaxed webtoon-dialogue-quote">
              ${p.dialogue}
            </p>
          </div>

          <!-- Hiệu ứng âm thanh SFX Webtoon -->
          ${p.sfx ? `
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#D4A359]/30 text-[#785928] tracking-widest border border-[#D4A359]/50">
                ⚡ SFX
              </span>
              <span class="text-xs font-bold text-[#785928] italic">
                ${p.sfx}
              </span>
            </div>
          ` : ''}

          <!-- Lời dẫn truyện lịch sử -->
          <p class="text-xs sm:text-sm text-[#57534E] leading-relaxed font-normal">
            ${p.desc}
          </p>

          <!-- Nút bấm soi nhanh bảo vật nếu trang có hotspot -->
          ${p.hotspots && p.hotspots.length > 0 ? `
            <div class="pt-2 border-t border-[#D4A359]/20 flex flex-wrap items-center gap-2">
              <span class="text-[11px] text-[#785928] font-semibold">Hiện vật trên trang này:</span>
              ${p.hotspots.map(hs => `
                <button
                  onclick="window.selectHotspot('${hs.id}', '${p.id}')"
                  class="text-[11px] px-2.5 py-1 bg-white hover:bg-[#8B1E1E] text-[#8B1E1E] hover:text-white border border-[#8B1E1E]/40 rounded-full font-medium transition-colors cursor-pointer"
                >
                  ✦ ${hs.title}
                </button>
              `).join('')}
            </div>
          ` : ''}

        </div>
    `).join('');

    return notesHTML ? `
      <details class="p-4 border-y border-[#D4A359]/40">
        <summary class="cursor-pointer text-sm font-bold text-[#8B1E1E]">Tư liệu mở rộng</summary>
        ${notesHTML}
      </details>
    ` : '';
  }

  // RENDER KHUNG KẾT THÚC HỒI & CHUYỂN TIẾP HỒI TIẾP THEO
  function renderChapterEndHTML(chap) {
    const nextChap = chap.nextChapId ? COMIC_CHAPTERS[chap.nextChapId] : null;

    return `
      <section class="reader-chapter-end">
        <span class="reader-chapter-end__mark">✓</span>
        <div>
          <span class="reader-chapter-end__eyebrow">Đã đọc xong</span>
          <h3>${chap.title}</h3>
        </div>
        <div class="reader-chapter-end__actions">
          ${nextChap ? `
            <button
              onclick="window.openChapter('${nextChap.id}')"
              class="reader-chapter-end__next"
            >
              <span>Đọc Hồi ${nextChap.chapterNum}</span><span>→</span>
            </button>
          ` : `
            <button onclick="window.navigateTo('trac-nghiem')" class="reader-chapter-end__next"><span>Thử tài sử học</span><span>→</span></button>
          `}
          <button onclick="window.scrollToReaderTop()" class="reader-chapter-end__top">↑ Lên đầu</button>
        </div>
      </section>
    `;
  }

  // CẬP NHẬT GIAO DIỆN HỒI HIỆN TẠI VÀ RENDER CÁC TRANG DỌC
  window.openChapter = function (chapterId, autoScroll = true) {
    const isReaderPage = window.location.pathname.includes('page-reader') || window.location.pathname.includes('doc-truyen');
    if (!isReaderPage) {
      localStorage.setItem('selected_chapter', chapterId);
      window.navigateTo('doc-truyen');
      return;
    }

    const chap = COMIC_CHAPTERS[chapterId] || COMIC_CHAPTERS['chap-1'];
    currentChapterId = chap.id;
    activeChapterIds = [chap.id];
    localStorage.setItem('selected_chapter', chap.id);

    // Cập nhật tiêu đề & tóm tắt
    const mainTitle = document.getElementById('chapter-main-title');
    if (mainTitle) mainTitle.textContent = chap.title;

    const subTitle = document.getElementById('chapter-sub-title');
    if (subTitle) subTitle.textContent = chap.subtitle;

    const summaryBox = document.getElementById('chapter-summary-text');
    if (summaryBox) summaryBox.textContent = chap.summary;

    // Cập nhật các tab nút Hồi
    ['chap-1', 'chap-2', 'chap-3'].forEach(ch => {
      const btn = document.getElementById(`btn-${ch}`);
      if (!btn) return;
      const isActive = ch === chap.id;
      btn.classList.toggle('chapter-card-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    // Render toàn bộ các trang của Hồi này theo dải dọc
    const stripContainer = document.getElementById('webtoon-strip-container');
    if (stripContainer) {
      const pagesHTML = chap.pages.map(p => renderPageItemHTML(p, chap)).join('');
      const endHTML = renderChapterNotesHTML(chap) + renderChapterEndHTML(chap);
      stripContainer.innerHTML = `
        <div id="chapter-block-${chap.id}" class="webtoon-chapter-strip animate-fade-in">
          ${pagesHTML}
          ${endHTML}
        </div>
      `;
    }

    const indicator = document.getElementById('reader-page-indicator');
    if (indicator) {
      indicator.textContent = `Hồi ${chap.chapterNum} · Trang ${chap.pages.length ? 1 : 0}/${chap.pages.length}`;
    }

    // Cập nhật danh sách mục lục trang ở Sidebar
    updateSidebarDirectory();

    // Cập nhật danh sách cổ vật trong hồi
    updateSidebarArtifacts(chap);

    // Reset box soi hiện vật về trạng thái hướng dẫn
    const infoBox = document.getElementById('hotspot-detail-box');
    if (infoBox) {
      infoBox.innerHTML = `
        <div class="py-4 text-center text-xs text-[#78716C] space-y-2">
          <div class="relative inline-flex items-center justify-center border-2 border-[#8B1E1E] bg-[#FAF7F0] text-[#8B1E1E] font-bold text-xs select-none w-8 h-8 rounded-xs">
            <span class="font-heading font-black tracking-tighter">TRẦN</span>
            <div class="absolute inset-0.5 border border-[#8B1E1E]/40 pointer-events-none"></div>
          </div>
          <p class="leading-relaxed">Nhấp điểm ✦ trên tranh hoặc trong mục Lời thoại và tư liệu của hồi để xem hồ sơ hiện vật thời Trần.</p>
        </div>
      `;
    }

    // Cuộn lên đầu vùng đọc truyện
    if (autoScroll) {
      window.scrollToReaderTop();
    }
  };

  // NỐI TIẾP HỒI KẾ TIẾP XUỐNG DƯỚI (INFINITE CONTINUOUS WEBTOON SCROLL)
  window.appendNextChapter = function () {
    const currentChap = COMIC_CHAPTERS[currentChapterId];
    if (!currentChap || !currentChap.nextChapId) return;

    const nextChap = COMIC_CHAPTERS[currentChap.nextChapId];
    if (!nextChap) return;

    if (activeChapterIds.includes(nextChap.id)) {
      if (nextChap.pages.length) window.scrollToPage(nextChap.pages[0].id);
      return;
    }

    activeChapterIds.push(nextChap.id);
    currentChapterId = nextChap.id;

    const stripContainer = document.getElementById('webtoon-strip-container');
    if (stripContainer) {
      const nextDiv = document.createElement('div');
      nextDiv.id = `chapter-block-${nextChap.id}`;
      nextDiv.className = 'webtoon-chapter-strip mt-12 pt-8 border-t-4 border-[#D4A359] animate-fade-in';

      const pagesHTML = nextChap.pages.map(p => renderPageItemHTML(p, nextChap)).join('');
      const endHTML = renderChapterNotesHTML(nextChap) + renderChapterEndHTML(nextChap);

      nextDiv.innerHTML = `
        <div class="px-5 py-4 bg-gradient-to-r from-[#8B1E1E] to-[#A82828] text-white rounded-xl shadow-md flex items-center justify-between mb-4">
          <div>
            <span class="text-[10px] uppercase font-bold tracking-widest text-[#D4A359] block">TIẾP NỐI LIỀN MẠCH</span>
            <h3 class="font-heading font-bold text-sm sm:text-base">${nextChap.title}</h3>
          </div>
          <span class="text-xs bg-white/20 px-2.5 py-1 rounded font-bold">${nextChap.pages.length} trang</span>
        </div>
        ${pagesHTML}
        ${endHTML}
      `;

      stripContainer.appendChild(nextDiv);

      // Cập nhật tab hồi & sidebar
      ['chap-1', 'chap-2', 'chap-3'].forEach(ch => {
        const btn = document.getElementById(`btn-${ch}`);
        if (!btn) return;
        const isActive = ch === nextChap.id;
        btn.classList.toggle('chapter-card-active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
      });

      updateSidebarDirectory();
      updateSidebarArtifacts(nextChap);

      // Cuộn mượt tới đầu hồi mới được nối
      nextDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // CẬP NHẬT MỤC LỤC TRANG TRONG SIDEBAR
  function updateSidebarDirectory() {
    const dirContainer = document.getElementById('chapter-page-directory');
    if (!dirContainer) return;

    let itemsHTML = '';
    activeChapterIds.forEach(chapId => {
      const chap = COMIC_CHAPTERS[chapId];
      if (!chap) return;

      itemsHTML += `
        <div class="mb-3">
          <div class="text-[11px] font-bold text-[#8B1E1E] uppercase tracking-wider pb-1 border-b border-[#D4A359]/30 mb-2">
            Hồi ${chap.chapterNum}: ${chap.title.split(':')[1] || ''}
          </div>
          <div class="space-y-1.5">
            ${chap.pages.map(p => `
              <button
                onclick="window.scrollToPage('${p.id}')"
                id="dir-item-${p.id}"
                class="w-full text-left p-2 rounded-lg text-xs transition-all flex items-center justify-between gap-2 border border-transparent hover:border-[#D4A359]/40 hover:bg-[#D4A359]/10 cursor-pointer text-[#44403C]"
              >
                <span class="truncate font-medium">Trang ${p.pageIdx}${p.title && !chap.notesOnly ? `: ${p.title.split(':')[1] || p.title}` : ''}</span>
                <span class="text-[10px] text-[#785928] shrink-0 font-bold">➔</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;
    });

    dirContainer.innerHTML = itemsHTML;
  }

  // CẬP NHẬT DANH SÁCH CỔ VẬT TRONG HỒI
  function updateSidebarArtifacts(chap) {
    const listContainer = document.getElementById('chapter-artifacts-list');
    if (!listContainer || !chap.artifacts) return;

    listContainer.innerHTML = chap.artifacts.map(art => `
      <div
        onclick="window.openArtifact('${art.id}')"
        class="flex items-center gap-3 p-2.5 rounded-lg border border-[#D4A359]/25 bg-white/60 hover:bg-[#D4A359]/15 hover:border-[#8B1E1E]/50 cursor-pointer transition-all group/item"
      >
        <img src="${art.img}" alt="${art.title}" class="w-14 h-14 rounded-lg object-cover border border-[#D4A359]/40 shrink-0 group-hover/item:scale-105 transition-transform" />
        <div class="min-w-0 flex-1">
          <span class="text-[10px] text-[#8B1E1E] font-semibold block truncate uppercase tracking-wider">${art.tag}</span>
          <h5 class="text-xs font-bold text-[#1C1917] truncate">${art.title}</h5>
          <span class="text-[10px] text-[#78716C] block truncate">${art.desc}</span>
        </div>
      </div>
    `).join('');
  }

  // CUỘN TỚI TRANG TRUYỆN CỤ THỂ
  window.scrollToPage = function (pageId) {
    const el = document.getElementById(`page-card-${pageId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // CUỘN LÊN ĐẦU VÙNG ĐỌC
  window.scrollToReaderTop = function () {
    const wrapper = document.getElementById('comic-reader-wrapper');
    if (wrapper) {
      wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // CHỌN HOTSPOT SOI KHẢO CỔ VÀ HIỂN THỊ CHI TIẾT
  window.selectHotspot = function (hsId, pageId) {
    let foundHs = null;
    let foundPage = null;

    for (const chapId of activeChapterIds) {
      const chap = COMIC_CHAPTERS[chapId];
      if (!chap) continue;
      for (const page of chap.pages) {
        const hs = (page.hotspots || []).find(h => h.id === hsId);
        if (hs) {
          foundHs = hs;
          foundPage = page;
          break;
        }
      }
      if (foundHs) break;
    }

    if (!foundHs) return;

    // Cập nhật box chi tiết ở Sidebar
    const infoBox = document.getElementById('hotspot-detail-box');
    if (infoBox) {
      infoBox.innerHTML = `
        <div class="space-y-3 animate-fade-in text-left">
          <div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#8B1E1E] text-white text-xs font-bold rounded shadow-xs">
            <span>✦</span> <span>${foundHs.title}</span>
          </div>

          <p class="text-xs sm:text-sm text-[#44403C] leading-relaxed bg-white/70 p-3 rounded-lg border border-[#D4A359]/30">
            ${foundHs.detail}
          </p>

          <div class="pt-2 border-t border-[#D4A359]/30 flex items-center justify-between gap-2">
            <span class="text-[11px] text-[#785928] font-semibold">Hiện vật số hóa</span>
            <button
              onclick="window.openArtifact('${foundHs.relicKey || 'thap-gom-hoa-nau'}')"
              class="px-3 py-1.5 bg-[#D4A359] hover:bg-[#c29247] text-[#1C1917] font-bold text-xs rounded transition-colors shadow-xs cursor-pointer flex items-center gap-1"
            >
              <span>Giám định 360°</span> <span>➔</span>
            </button>
          </div>
        </div>
      `;
    }

    // Trên điện thoại: hiển thị thông báo popup nhanh (toast)
    showHotspotToast(foundHs);
  };

  function showHotspotToast(hs) {
    let toast = document.getElementById('hotspot-mobile-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'hotspot-mobile-toast';
      toast.className = 'fixed bottom-20 left-4 right-4 z-50 p-4 bg-[#FAF7F0] border-2 border-[#8B1E1E] rounded-xl shadow-2xl lg:hidden animate-fade-in transition-all';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <div class="flex items-start justify-between gap-3">
        <div>
          <span class="text-[10px] font-bold text-[#8B1E1E] uppercase tracking-wider block">✦ HIỆN VẬT KHẢO CỔ</span>
          <h4 class="font-bold text-xs text-[#1C1917] mt-0.5">${hs.title}</h4>
          <p class="text-xs text-[#57534E] mt-1 leading-relaxed line-clamp-3">${hs.detail}</p>
        </div>
        <button onclick="document.getElementById('hotspot-mobile-toast').remove()" class="text-lg font-bold text-[#8B1E1E] p-1 cursor-pointer">&times;</button>
      </div>
      <div class="mt-3 pt-2 border-t border-[#D4A359]/30 flex justify-end">
        <button onclick="window.openArtifact('${hs.relicKey || 'thap-gom-hoa-nau'}')" class="px-3 py-1 bg-[#8B1E1E] text-white text-xs font-bold rounded">
          Soi 360° ➔
        </button>
      </div>
    `;

    clearTimeout(window._hsToastTimer);
    window._hsToastTimer = setTimeout(() => {
      if (toast && toast.parentElement) toast.remove();
    }, 6000);
  }

  // ẨN / HIỆN ĐIỂM SOI KHẢO CỔ TRÊN TOÀN BỘ TRANH
  window.toggleHotspots = function () {
    hotspotsVisible = !hotspotsVisible;
    document.querySelectorAll('.webtoon-hotspot').forEach(btn => {
      if (hotspotsVisible) {
        btn.classList.remove('hidden');
      } else {
        btn.classList.add('hidden');
      }
    });

    const toggleBtns = document.querySelectorAll('.btn-toggle-hotspots');
    toggleBtns.forEach(btn => {
      btn.innerHTML = hotspotsVisible ? '<span>👁️</span> <span>Ẩn điểm soi</span>' : '<span>👁️</span> <span>Hiện điểm soi</span>';
    });
  };

  // ĐỔI CHẾ ĐỘ NỀN WEBTOON (GIẤY CỔ / RẠP CHIẾU TỐI)
  window.toggleWebtoonTheme = function () {
    isWebtoonDarkMode = !isWebtoonDarkMode;
    const body = document.body;
    if (isWebtoonDarkMode) {
      body.classList.add('webtoon-dark-mode');
    } else {
      body.classList.remove('webtoon-dark-mode');
    }

    const themeBtns = document.querySelectorAll('.btn-toggle-theme');
    themeBtns.forEach(btn => {
      btn.innerHTML = isWebtoonDarkMode
        ? '<span>📜</span><span class="hidden sm:inline">Nền sáng</span>'
        : '<span>🎬</span><span class="hidden sm:inline">Nền tối</span>';
    });
  };

  // ĐỔI ĐỘ RỘNG KHUNG ĐỌC WEBTOON
  window.toggleWebtoonWidth = function () {
    const readerMainCol = document.getElementById('webtoon-main-column');
    if (!readerMainCol) return;

    if (webtoonWidthMode === 'standard') {
      webtoonWidthMode = 'wide';
      readerMainCol.classList.remove('lg:col-span-8');
      readerMainCol.classList.add('lg:col-span-9');
      const sidebar = document.getElementById('webtoon-sidebar-column');
      if (sidebar) {
        sidebar.classList.remove('lg:col-span-4');
        sidebar.classList.add('lg:col-span-3');
      }
    } else {
      webtoonWidthMode = 'standard';
      readerMainCol.classList.remove('lg:col-span-9');
      readerMainCol.classList.add('lg:col-span-8');
      const sidebar = document.getElementById('webtoon-sidebar-column');
      if (sidebar) {
        sidebar.classList.remove('lg:col-span-3');
        sidebar.classList.add('lg:col-span-4');
      }
    }
  };

  // TOÀN MÀN HÌNH WEBTOON CINEMA
  window.toggleFullscreenReader = function () {
    const wrapper = document.getElementById('comic-reader-wrapper');
    const toggleBtns = document.querySelectorAll('.btn-toggle-fullscreen');

    if (!isFullscreenActive) {
      if (wrapper && wrapper.requestFullscreen) {
        wrapper.requestFullscreen().catch(() => {});
      }
      if (wrapper) wrapper.classList.add('fullscreen-reader-active');
      isFullscreenActive = true;
      toggleBtns.forEach(b => b.innerHTML = '<span>✕</span><span class="hidden sm:inline">Thu nhỏ</span>');
    } else {
      if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      if (wrapper) wrapper.classList.remove('fullscreen-reader-active');
      isFullscreenActive = false;
      toggleBtns.forEach(b => b.innerHTML = '<span>⛶</span><span class="hidden sm:inline">Toàn màn hình</span>');
    }
  };

  document.addEventListener('fullscreenchange', function () {
    const wrapper = document.getElementById('comic-reader-wrapper');
    const toggleBtns = document.querySelectorAll('.btn-toggle-fullscreen');
    if (!document.fullscreenElement) {
      isFullscreenActive = false;
      if (wrapper) wrapper.classList.remove('fullscreen-reader-active');
      toggleBtns.forEach(b => b.innerHTML = '<span>⛶</span><span class="hidden sm:inline">Toàn màn hình</span>');
    }
  });

  // HÀM HỖ TRỢ CHUYỂN HỒI KẾ TIẾP / TRƯỚC
  window.nextChapter = function () {
    const order = ['chap-1', 'chap-2', 'chap-3'];
    const idx = order.indexOf(currentChapterId);
    if (idx < order.length - 1) {
      window.openChapter(order[idx + 1]);
    }
  };

  window.prevChapter = function () {
    const order = ['chap-1', 'chap-2', 'chap-3'];
    const idx = order.indexOf(currentChapterId);
    if (idx > 0) {
      window.openChapter(order[idx - 1]);
    }
  };

  // TƯƠNG THÍCH NGƯỢC CÁC HÀM CŨ (BACKWARDS COMPATIBILITY)
  window.flipCorner = function (direction) {
    if (direction === 'next') {
      window.nextChapter();
    } else {
      window.prevChapter();
    }
  };

  window.setPanelIdx = function (idx) {
    if (idx < 2) window.openChapter('chap-1');
    else if (idx < 4) window.openChapter('chap-2');
    else window.openChapter('chap-3');
  };

  window.nextPanel = function () { window.nextChapter(); };
  window.prevPanel = function () { window.prevChapter(); };
  window.toggleFlipSound = function () {};

  // THEO DÕI TIẾN TRÌNH CUỘN TRANG WEBTOON (SCROLL PROGRESS TRACKER)
  window.addEventListener('scroll', function () {
    const isReaderPage = window.location.pathname.includes('page-reader') || window.location.pathname.includes('doc-truyen');
    if (!isReaderPage) return;

    // Cập nhật thanh tiến trình %
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;

    const progressFill = document.getElementById('webtoon-progress-fill');
    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }

    const progressPercentText = document.getElementById('webtoon-progress-text');
    if (progressPercentText) {
      progressPercentText.textContent = `${progress}%`;
    }

    // Tự động highlight mục đang xem trong sidebar directory
    const pageCards = document.querySelectorAll('.webtoon-page-card');
    let currentInView = null;
    pageCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top <= 250 && rect.bottom >= 150) {
        currentInView = card;
      }
    });

    if (currentInView) {
      const pId = currentInView.getAttribute('data-page-id');
      const pIdx = currentInView.getAttribute('data-page-idx');
      const chapId = currentInView.getAttribute('data-chapter-id');
      const chap = COMIC_CHAPTERS[chapId];

      const indicator = document.getElementById('reader-page-indicator');
      if (indicator && chap) {
        indicator.textContent = `Hồi ${chap.chapterNum} · Trang ${pIdx}/${chap.pages.length}`;
      }

      // Highlight sidebar button
      document.querySelectorAll('#chapter-page-directory button').forEach(b => {
        b.classList.remove('page-dir-active');
      });
      const activeBtn = document.getElementById(`dir-item-${pId}`);
      if (activeBtn) {
        activeBtn.classList.add('page-dir-active');
      }
    }
  }, { passive: true });

  // LẮNG NGHE PHÍM TẮT ĐỌC TRUYỆN TRANH (KEYBOARD SHORTCUTS)
  document.addEventListener('keydown', function (e) {
    const isReaderPage = window.location.pathname.includes('page-reader') || window.location.pathname.includes('doc-truyen');
    if (!isReaderPage || e.target.matches('input, textarea, select')) return;

    if (e.key === 'n' || e.key === 'N') {
      window.nextChapter();
    } else if (e.key === 'p' || e.key === 'P') {
      window.prevChapter();
    } else if (e.key === 'f' || e.key === 'F') {
      window.toggleFullscreenReader();
    } else if (e.key === 'h' || e.key === 'H') {
      window.toggleHotspots();
    } else if (e.key === 't' || e.key === 'T') {
      window.toggleWebtoonTheme();
    }
  });


  // --- 4. BỘ LỌC & MODAL NHÂN VẬT (PAGE 03 - CHARACTERS) ---
  const CHARACTER_DETAILS = {
    'tran-quoc-tuan': {
      name: 'Hưng Đạo Đại Vương Trần Quốc Tuấn',
      years: '1228 – 1300',
      role: 'Tiết chế Thống lĩnh Toàn quân Thủy bộ',
      quote: '"Bệ hạ chém đầu tôi trước rồi hãy hàng!"',
      bio: 'Thiên tài quân sự kiệt xuất bậc nhất lịch sử Việt Nam, linh hồn của hai cuộc kháng chiến chống quân Nguyên Mông đại thắng (1285 và 1288). Ông là tác giả "Hịch Tướng Sĩ" và "Binh thư yếu lược". Sau khi mất, ông được nhân dân tôn kính phụng thờ là Đức Thánh Trần Cửu Thiên Vũ Đế.'
    },
    'tran-quoc-toan': {
      name: 'Hoài Văn Hầu Trần Quốc Toản',
      years: '1267 – 1285',
      role: 'Dũng tướng thiếu niên anh hùng',
      quote: '"Phá Cường Địch, Báo Hoàng Ân"',
      bio: 'Hình tượng thiếu niên anh hùng tiêu biểu của dân tộc. Căm giận vì không được dự bàn việc nước tại bến Bình Than, chàng đã bóp nát quả cam vua ban, về chiêu mộ hơn ngàn gia binh, tự thêu lá cờ sáu chữ vàng xung trận xông pha lập nhiều chiến công hiển hách.'
    },
    'tran-thu-do': {
      name: 'Thái sư Trần Thủ Độ',
      years: '1194 – 1264',
      role: 'Khai quốc công thần · Linh hồn vương triều',
      quote: '"Đầu tôi chưa rơi xuống đất, xin bệ hạ đừng lo!"',
      bio: 'Người đặt nền móng kiến lập vương triều Trần rực rỡ. Trong cuộc kháng chiến chống Mông Cổ lần I (1258), câu nói đanh thép của ông đã giữ vững lòng quân dân, xoay chuyển cục diện kháng chiến.'
    },
    'tran-nhan-tong': {
      name: 'Phật hoàng Trần Nhân Tông',
      years: '1258 – 1308',
      role: 'Minh quân anh triết · Sơ tổ Thiền phái Trúc Lâm',
      quote: '"Xã tắc hai phen chồn ngựa đá / Non sông nghìn thuở vững âu vàng"',
      bio: 'Vị hoàng đế anh minh đã triệu tập Hội nghị Bình Than và Hội nghị Diên Hồng, gắn kết lòng dân trăm họ đánh bại hai đạo quân xâm lược Nguyên Mông. Khi thái bình, ngài nhường ngôi đi tu và sáng lập Thiền phái Trúc Lâm Yên Tử.'
    },
    'yet-kieu': {
      name: 'Gia tướng Yết Kiêu',
      years: 'Thế kỷ XIII',
      role: 'Thủy quân đại tướng · Dũng sĩ lặn sông',
      quote: '"Tôi chưa thấy chúa công về, thề không rời bến Bãi Tân!"',
      bio: 'Gia tướng trung liệt của Trần Hưng Đạo, tài bơi lặn phi thường như cá dưới nước. Ông từng đục thủng đáy thuyền chiến giặc Nguyên, lập chiến công xuất thần trong các trận thủy chiến.'
    },
    'da-tuong': {
      name: 'Gia tướng Dã Tượng',
      years: 'Thế kỷ XIII',
      role: 'Bộ binh dũng tướng · Thần cơ luyện tượng binh',
      quote: '"Thà chịu chết cùng chúa công, quyết không chịu nhục!"',
      bio: 'Gia thần trung dũng kiệt xuất phụ trách huấn luyện tượng binh và kỵ binh, luôn sát cánh bảo vệ Tiết chế Quốc công Trần Hưng Đạo qua những thời khắc cam go nhất.'
    }
  };

  window.setCharacterRole = function (role) {
    // Cập nhật tab active
    const roleBtns = document.querySelectorAll('button[onclick*="setCharacterRole"]');
    roleBtns.forEach(btn => {
      if (btn.textContent.trim() === role) {
        btn.className = "px-3 py-1.5 text-xs font-bold whitespace-nowrap rounded-md transition-all cursor-pointer bg-[#8B1E1E] text-white";
      } else {
        btn.className = "px-3 py-1.5 text-xs font-bold whitespace-nowrap rounded-md transition-all cursor-pointer text-[#44403C] hover:text-[#8B1E1E]";
      }
    });

    // Lọc các thẻ nhân vật
    const cards = document.querySelectorAll('.grid > .lg\\:col-span-4');
    cards.forEach(card => {
      const cardRoleBadge = card.querySelector('.absolute.top-2\\.5.left-2\\.5');
      if (!cardRoleBadge) return;
      const cardRole = cardRoleBadge.textContent.trim();
      if (role === 'Tất cả' || cardRole === role) {
        card.style.display = '';
        card.classList.add('animate-fade-in');
      } else {
        card.style.display = 'none';
      }
    });
  };

  window.openCharacter = function (charId) {
    const char = CHARACTER_DETAILS[charId];
    if (!char) return;

    let charModal = document.getElementById('char-modal');
    if (!charModal) {
      charModal = document.createElement('div');
      charModal.id = 'char-modal';
      charModal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in';
      document.body.appendChild(charModal);
    }

    charModal.innerHTML = `
      <div class="bg-[#FAF7F0] border-2 border-[#D4A359] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
        <button onclick="document.getElementById('char-modal').classList.add('hidden')" class="absolute top-4 right-4 text-2xl font-bold text-[#8B1E1E] hover:opacity-75 cursor-pointer">&times;</button>
        <span class="text-xs font-bold uppercase tracking-wider text-[#8B1E1E] block mb-1">${char.role} · ${char.years}</span>
        <h2 class="font-heading font-black text-2xl sm:text-3xl text-[#1C1917] mb-3">${char.name}</h2>
        <div class="p-3.5 bg-[#F2EBD9] border-l-4 border-[#8B1E1E] rounded-md mb-4">
          <p class="font-heading italic font-bold text-sm text-[#8B1E1E]">${char.quote}</p>
        </div>
        <p class="text-xs sm:text-sm text-[#44403C] leading-relaxed mb-6">${char.bio}</p>
        <div class="flex items-center justify-end gap-3 pt-3 border-t border-[#D4A359]/30">
          <button onclick="document.getElementById('char-modal').classList.add('hidden')" class="px-4 py-2 border border-[#D4A359] text-xs font-bold rounded-lg text-[#785928] hover:bg-[#D4A359]/10">Đóng</button>
          <button onclick="window.navigateTo('doc-truyen')" class="px-4 py-2 bg-[#8B1E1E] text-white text-xs font-bold rounded-lg hover:bg-[#701616]">Xem trong truyện tranh →</button>
        </div>
      </div>
    `;
    charModal.classList.remove('hidden');
  };

  // --- 5. TƯƠNG TÁC SỰ KIỆN LỊCH SỬ (PAGE 04 - EVENTS) ---
  const EVENT_DETAILS = {
    'khang-chien-1258': {
      year: 'Năm 1258',
      location: 'Bình Lệ Nguyên, Thăng Long, Đông Bộ Đầu',
      title: 'Kháng chiến chống Mông Cổ lần I (Đông Bộ Đầu)',
      core: 'Đập tan huyền thoại bách chiến bách thắng của vó ngựa kỵ binh Mông Cổ khắp Á - Âu.',
      desc: 'Tướng giặc Ngột Lương Hợp Thai dẫn quân tràn vào biên giới. Vua tôi nhà Trần chủ động rút khỏi kinh thành thực hiện chiến thuật "Vườn không nhà trống", dồn quân giặc vào cảnh thiếu lương thực và dịch bệnh. Khi giặc suy kiệt, quân Trần bất ngờ phản công ở Đông Bộ Đầu, đánh đuổi giặc tháo chạy tan tác.',
      heroes: ['Trần Thái Tông', 'Trần Thủ Độ', 'Lê Phụ Trần']
    },
    'hoi-nghi-binh-than-1282': {
      year: 'Năm 1282',
      location: 'Bến Bình Than, Lục Đầu Giang',
      title: 'Hội nghị quân sự Bình Than',
      core: 'Quyết định chiến lược thống nhất quân cơ tối cao trước nguy cơ xâm lược của 50 vạn quân Nguyên.',
      desc: 'Vua Trần Nhân Tông triệu tập vương hầu, trăm quan bàn kế phòng thủ đất nước. Cử Trần Quốc Tuấn làm Quốc công Tiết chế thống lĩnh toàn quân. Đây cũng là nơi người thiếu niên Trần Quốc Toản vì còn nhỏ tuổi không được vào dự bàn đã bóp nát quả cam trong tay vì uất nghẹn.',
      heroes: ['Trần Nhân Tông', 'Trần Hưng Đạo', 'Trần Quốc Toản', 'Trần Khánh Dư']
    },
    'hoi-nghi-dien-hong-1284': {
      year: 'Năm 1284',
      location: 'Điện Diên Hồng, Kinh thành Thăng Long',
      title: 'Hội nghị Diên Hồng & Lời thề Sát Thát',
      core: 'Biểu tượng tối cao của tinh thần đại đoàn kết toàn dân tộc trong lịch sử Việt Nam.',
      desc: 'Thượng hoàng Trần Thánh Tông mời các bậc phụ lão anh minh khắp cả nước về điện Diên Hồng để hỏi: "Nên hòa hay nên đánh?". Muôn triệu tiếng hô "ĐÁNH!" đồng thanh vang dội như sấm dậy, thề xăm chữ "Sát Thát" lên cánh tay quyết tử bảo vệ non sông.',
      heroes: ['Trần Thánh Tông', 'Các bô lão Diên Hồng', 'Trần Quốc Tuấn']
    },
    'khang-chien-1285': {
      year: 'Năm 1285',
      location: 'Tây Kết, Hàm Tử, Chương Dương, Thăng Long',
      title: 'Đại chiến Tây Kết, Hàm Tử, Chương Dương & Giải phóng Thăng Long',
      core: 'Cuộc phản công chiến lược thần tốc đè bẹp 50 vạn đại quân Thoát Hoan, thu phục kinh đô Thăng Long.',
      desc: 'Quân Trần sau thời gian lui binh bảo toàn lực lượng đã mở chiến dịch phản công vĩ đại. Trần Nhật Duật đại phá giặc ở Hàm Tử Quan, Trần Quang Khải giải phóng Chương Dương Cướp giáo giặc, chém tướng Toa Đô ở Tây Kết, buộc Thoát Hoan phải chui vào ống đồng tháo chạy về nước.',
      heroes: ['Trần Quốc Tuấn', 'Trần Quang Khải', 'Trần Nhật Duật', 'Trần Quốc Toản']
    },
    'dai-thang-bach-dang-1288': {
      year: 'Năm 1288',
      location: 'Cửa biển sông Bạch Đằng, Quảng Ninh - Hải Phòng',
      title: 'Đại thắng Sông Bạch Đằng 1288',
      core: 'Trận thủy chiến thiên tài chôn vùi vĩnh viễn dã tâm xâm lược Đại Việt của đế quốc Nguyên Mông.',
      desc: 'Quốc công Tiết chế Trần Hưng Đạo vận dụng tài tình quy luật thủy triều, cắm bãi cọc ngầm lim bịt kín lối rút lui của địch. Khi thủy triều rút, toàn bộ đoàn thuyền chiến hơn 600 chiến thuyền của Ô Mã Nhi bị xé nát, Ô Mã Nhi và Phàn Tiếp bị bắt sống.',
      heroes: ['Trần Hưng Đạo', 'Trần Khánh Dư', 'Yết Kiêu', 'Dã Tượng']
    }
  };

  window.selectEvent = function (eventId) {
    const ev = EVENT_DETAILS[eventId];
    if (!ev) return;

    // Cập nhật nút active trên timeline
    const timelineBtns = document.querySelectorAll('button[onclick*="selectEvent"]');
    timelineBtns.forEach(btn => {
      const onclickAttr = btn.getAttribute('onclick') || '';
      if (onclickAttr.includes(eventId)) {
        btn.className = "flex flex-col text-left p-3.5 rounded-xl border min-w-[200px] sm:min-w-[240px] transition-all cursor-pointer bg-[#8B1E1E] text-white border-[#8B1E1E] shadow-md scale-[1.02]";
        btn.querySelectorAll('span').forEach(s => s.classList.remove('text-[#8B1E1E]', 'text-[#44403C]'));
      } else {
        btn.className = "flex flex-col text-left p-3.5 rounded-xl border min-w-[200px] sm:min-w-[240px] transition-all cursor-pointer bg-[#FAF7F0] text-[#1C1917] border-[#D4A359]/40 hover:border-[#8B1E1E]";
      }
    });

    // Cập nhật khối chi tiết
    const detailBox = document.querySelector('.lg\\:col-span-8');
    if (detailBox) {
      detailBox.innerHTML = `
        <div class="animate-fade-in space-y-6">
          <div>
            <div class="flex items-center gap-2 text-xs font-bold text-[#8B1E1E] mb-2">
              <span>${ev.year}</span>
              <span>·</span>
              <span class="text-[#235347]">${ev.location}</span>
            </div>
            <h2 class="font-heading font-black text-2xl sm:text-3xl text-[#1C1917]">
              ${ev.title}
            </h2>
            <div class="mt-3 p-3 bg-[#F2EBD9] rounded-lg border-l-3 border-[#8B1E1E]">
              <span class="text-xs font-bold text-[#8B1E1E] uppercase tracking-wider block mb-0.5">
                Ý nghĩa lịch sử cốt lõi:
              </span>
              <p class="text-xs sm:text-sm font-semibold text-[#1C1917]">
                ${ev.core}
              </p>
            </div>
          </div>

          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-[#785928]">
              Diễn biến chiến sự
            </h4>
            <p class="text-xs sm:text-sm text-[#44403C] leading-relaxed">
              ${ev.desc}
            </p>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-[#785928] mb-2">
              Nhân vật then chốt
            </h4>
            <div class="flex flex-wrap gap-2">
              ${ev.heroes.map(h => `<span class="text-xs font-semibold text-[#8B1E1E] bg-[#D4A359]/20 px-3 py-1 rounded-md">${h}</span>`).join('')}
            </div>
          </div>

          <div class="pt-4 border-t border-[#D4A359]/30 flex items-center justify-between">
            <span class="text-xs text-[#78716C]">
              Đã được chuyển thể thành truyện tranh vẽ tay
            </span>
            <button onclick="window.navigateTo('doc-truyen')" class="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#8B1E1E] hover:bg-[#721818] rounded-md transition-colors cursor-pointer">
              Đọc chương truyện tranh này →
            </button>
          </div>
        </div>
      `;
    }
  };

  // --- 6. TƯ LIỆU HIỆN VẬT & PHÒNG 360° (PAGE 06 & 07) ---
  const ARTIFACT_DATA = {
    'thap-gom-hoa-nau': {
      title: 'Thạp Gốm Hoa Nâu Chạm Khắc Võ Sĩ',
      tag: 'Bảo vật Quốc gia thời Trần',
      img: 'images/artifact_thap_gom_hoanau_1792135273950.jpg',
      period: 'Thế kỷ XIII - XIV',
      material: 'Gốm men tro phủ oxit sắt (Hoa nâu truyền thống)',
      dimension: 'Cao 45cm, đường kính miệng 30cm',
      desc: 'Thạp gốm hoa nâu thời Trần là đỉnh cao của mỹ thuật gốm Đại Việt. Thân thạp được tạo dải băng hoa sen kép ở chân đế và vai, phần thân chính chạm khắc nổi hình tượng các chiến sĩ Đại Việt mình trần, quấn khố, xăm trổ, cưỡi tuấn mã cầm giáo và trường kiếm trong khí thế hào hùng.'
    },
    'dau-rong-la-de': {
      title: 'Đầu Rồng Lá Đề Đất Nung Thăng Long',
      tag: 'Bảo vật Quốc gia thời Trần',
      img: 'images/artifact_dau_rong_lade_1792135273755.jpg',
      period: 'Thế kỷ XIII',
      material: 'Đất nung chạm nổi hai mặt',
      dimension: 'Cao 60cm, rộng 48cm',
      desc: 'Hiện vật điêu khắc kiến trúc trang trí bờ nóc mái cung điện Hoàng thành Thăng Long thời Trần. Hình tượng rồng thời Trần mang dáng dấp khỏe khoắn, uyển chuyển với thân hình lượn sóng nhịp nhàng, bờm dài cuộn mây, thể hiện tinh thần phóng khoáng và sức sống mãnh liệt của dân tộc sau đại thắng ngoại xâm.'
    },
    'bai-coc-bach-dang': {
      title: 'Cọc Gỗ Lim Sông Bạch Đằng',
      tag: 'Di vật Chiến trường Lịch sử',
      img: 'images/comic_page_bachdang_1792135273305.jpg',
      period: 'Năm 1288',
      material: 'Gỗ lim cổ thụ vát nhọn đầu',
      dimension: 'Dài 2.5m - 3.2m, đường kính 20 - 30cm',
      desc: 'Chứng tích hào hùng dưới đáy sông Bạch Đằng. Hàng vạn cây gỗ lim được quân dân Đại Việt đẵn từ rừng, vát nhọn và cắm ngầm dưới lòng sông để đón bắt toàn bộ chiến thuyền thủy binh Ô Mã Nhi năm 1288.'
    },
    'kiem-lenh-nha-tran': {
      title: 'Thanh Kiếm Lệnh & Hổ Phù Triều Trần',
      tag: 'Binh khí & Quân chỉ',
      img: 'images/comic_page_tranquoctoan_1792135273832-.jpg',
      period: 'Thế kỷ XIII',
      material: 'Đồng thau đúc & chuôi dát vàng',
      dimension: 'Dài 85cm',
      desc: 'Kiếm lệnh quân chỉ huy của triều đình nhà Trần cùng tấm hổ phù khắc chữ Hán biểu trưng cho quyền điều binh khiển tướng của Tiết chế Quốc công Trần Hưng Đạo.'
    },
    'bat-men-ngoc-sen': {
      title: 'Bát Gốm Men Ngọc Khắc Cánh Sen',
      tag: 'Đồ ngự dụng Cung đình',
      img: 'images/artifact_thap_gom_hoanau_1792135273950.jpg',
      period: 'Thế kỷ XIII',
      material: 'Gốm men ngọc (Celadon)',
      dimension: 'Đường kính miệng 18cm',
      desc: 'Được chế tác tinh xảo với lớp men ngọc bóng mịn, bên ngoài chạm khắc nhiều lớp cánh sen thanh thoát, phản ánh tinh thần Phật giáo Đại thừa nhập thế sâu đậm dưới triều đại nhà Trần.'
    },
    'an-mon-ha-tham-su': {
      title: 'Ấn Đồng "Môn Hạ Thẩm Sự"',
      tag: 'Bảo vật Quốc gia · Ấn chương triều đình',
      img: 'images/artifact_dau_rong_lade_1792135273755.jpg',
      period: 'Năm Đắc Long thứ 5 (1226)',
      material: 'Đồng nguyên khối đúc nổi',
      dimension: 'Cạnh 7.5cm x 7.5cm, cao 8cm',
      desc: 'Ấn tín tối cao của cơ quan Môn Hạ Sảnh triều Trần, dùng đóng dấu lên các chỉ dụ và văn bản cơ mật quân quốc triều đình.'
    }
  };

  window.setArtifactCategory = function (category) {
    const catBtns = document.querySelectorAll('button[onclick*="setArtifactCategory"]');
    catBtns.forEach(btn => {
      if (btn.textContent.trim() === category) {
        btn.className = "px-3 py-1.5 text-xs font-bold whitespace-nowrap rounded-md transition-all cursor-pointer bg-[#8B1E1E] text-white";
      } else {
        btn.className = "px-3 py-1.5 text-xs font-bold whitespace-nowrap rounded-md transition-all cursor-pointer text-[#44403C] hover:text-[#8B1E1E]";
      }
    });

    const cards = document.querySelectorAll('.grid > .lg\\:col-span-4');
    cards.forEach(card => {
      const badge = card.querySelector('.absolute.top-2\\.5.left-2\\.5');
      if (!badge) return;
      const cardCat = badge.textContent.trim();
      if (category === 'Tất cả' || cardCat === category) {
        card.style.display = '';
        card.classList.add('animate-fade-in');
      } else {
        card.style.display = 'none';
      }
    });
  };

  window.openArtifact = function (artifactId) {
    window.location.href = `HaoKhiDongA_Trang_07_page-inspector.html?id=${artifactId}`;
  };

  // --- 6. TƯ LIỆU HIỆN VẬT & HIỆU ỨNG MỞ HỘP QUÀ BÍ MẬT 3D (PAGE 06 & 07) ---
  let isBoxOpen = false;
  let currentArtifactId = 'thap-gom-hoa-nau';
  let artifactRotationAngle = 0;
  let isArtifactZoomed = false;

  // Âm thanh tổng hợp Web Audio API (hoạt động độc lập không cần tải mp3 ngoài)
  function playUnboxSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();

      // Tiếng chuông ngọc lung linh (Crystalline Shimmer)
      const chimes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
      chimes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        const startTime = ctx.currentTime + idx * 0.07;
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.16, startTime + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.55);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.6);
      });

      // Tiếng kèn lệnh hoàng gia vang dội (Royal Fanfare) khi bung nắp
      setTimeout(() => {
        const fanfareChords = [
          [261.63, 329.63, 392.00], // C major
          [329.63, 392.00, 523.25], // C/E
          [392.00, 523.25, 659.25]  // G/C
        ];
        fanfareChords.forEach((chord, step) => {
          chord.forEach(f => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            const startTime = ctx.currentTime + step * 0.18;
            osc.frequency.setValueAtTime(f, startTime);
            gain.gain.setValueAtTime(0.12, startTime);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.8);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(startTime);
            osc.stop(startTime + 0.85);
          });
        });
      }, 550);
    } catch (e) {
      console.warn('AudioContext not allowed or not supported', e);
    }
  }

  // Pháo hoa & hạt sáng kim tuyến bung ra từ rương bí mật
  function generateConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    container.innerHTML = '';
    const colors = ['#D4A359', '#FAF7F0', '#8B1E1E', '#EFE3CA', '#FFD700', '#235347'];

    for (let i = 0; i < 48; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      const size = Math.random() * 10 + 6;
      particle.style.width = `${size}px`;
      particle.style.height = `${size * (Math.random() > 0.5 ? 1 : 1.8)}px`;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      particle.style.left = '50%';
      particle.style.top = '48%';

      // Góc và khoảng cách phân tán
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 340 + 70;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist - 80;
      const rot = (Math.random() - 0.5) * 720;

      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      particle.style.setProperty('--rot', `${rot}deg`);
      particle.style.animationDuration = `${1.2 + Math.random() * 0.8}s`;

      container.appendChild(particle);
    }
    setTimeout(() => { container.innerHTML = ''; }, 2400);
  }

  window.triggerMysteryUnbox = function () {
    if (isBoxOpen) {
      window.resetMysteryBox();
      return;
    }

    const boxChest = document.getElementById('box-chest');
    const boxLid = document.getElementById('box-lid');
    const sealedView = document.getElementById('mystery-box-sealed');
    const openedView = document.getElementById('mystery-box-opened');
    const unboxBtnText = document.getElementById('btn-unbox-text');

    // 1. Kích hoạt âm thanh lung linh
    playUnboxSound();

    // 2. Rung lắc rương bí mật
    if (boxChest) boxChest.classList.add('box-rumble');

    // 3. Nổ hạt kim tuyến
    setTimeout(generateConfetti, 250);

    // 4. Mở bung nắp 3D
    setTimeout(() => {
      if (boxLid) boxLid.classList.add('open');
    }, 350);

    // 5. Chuyển sang hiển thị bảo vật lơ lửng phát quang
    setTimeout(() => {
      if (sealedView) sealedView.classList.add('hidden');
      if (openedView) {
        openedView.classList.remove('hidden');
        openedView.classList.add('grid');
      }
      isBoxOpen = true;
      if (unboxBtnText) unboxBtnText.textContent = 'Đóng Rương Bí Mật';

      const artContainer = document.getElementById('artifact-card-container');
      if (artContainer) {
        artContainer.classList.remove('pop-emerge');
        void artContainer.offsetWidth; // trigger reflow
        artContainer.classList.add('pop-emerge');
      }
    }, 750);
  };

  window.resetMysteryBox = function () {
    const boxChest = document.getElementById('box-chest');
    const boxLid = document.getElementById('box-lid');
    const sealedView = document.getElementById('mystery-box-sealed');
    const openedView = document.getElementById('mystery-box-opened');
    const unboxBtnText = document.getElementById('btn-unbox-text');

    if (boxLid) boxLid.classList.remove('open');
    if (boxChest) boxChest.classList.remove('box-rumble');

    if (openedView) {
      openedView.classList.add('hidden');
      openedView.classList.remove('grid');
    }
    if (sealedView) sealedView.classList.remove('hidden');

    isBoxOpen = false;
    if (unboxBtnText) unboxBtnText.textContent = 'Mở Rương Bí Mật';

    // Đặt lại góc xoay và phóng to
    artifactRotationAngle = 0;
    isArtifactZoomed = false;
    applyArtifactTransform();
  };

  window.selectMysteryArtifact = function (artId) {
    currentArtifactId = artId;
    const data = ARTIFACT_DATA[artId];
    if (!data) return;

    // Cập nhật thông tin vào DOM
    updateInspectorDOM(data);

    // Đóng rương trước rồi tự động kích hoạt nghi thức mở ấn tượng
    window.resetMysteryBox();
    setTimeout(() => {
      window.triggerMysteryUnbox();
    }, 200);
  };

  window.rotateArtifact = function (delta) {
    if (!isBoxOpen) return;
    artifactRotationAngle = (artifactRotationAngle + delta) % 360;
    applyArtifactTransform();
  };

  window.toggleArtifactZoom = function () {
    if (!isBoxOpen) return;
    isArtifactZoomed = !isArtifactZoomed;
    const zoomBtn = document.getElementById('btn-zoom');
    if (zoomBtn) {
      zoomBtn.innerHTML = isArtifactZoomed ? '<span>🔍</span> <span>Thu nhỏ bình thường</span>' : '<span>🔍</span> <span>Phóng to soi chi tiết</span>';
    }
    applyArtifactTransform();
  };

  function applyArtifactTransform() {
    const img = document.getElementById('inspector-img');
    if (!img) return;
    const scale = isArtifactZoomed ? 1.35 : 1;
    img.style.transform = `perspective(800px) rotateY(${artifactRotationAngle}deg) scale(${scale})`;
    img.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)';
  }

  function updateInspectorDOM(data) {
    const titleH1 = document.querySelector('h1.font-heading');
    if (titleH1) titleH1.textContent = `Phòng Giám Định: ${data.title}`;

    const mainImg = document.getElementById('inspector-img');
    if (mainImg) {
      mainImg.src = data.img;
      mainImg.alt = data.title;
    }

    const caption = document.getElementById('inspector-caption');
    if (caption) caption.textContent = `${data.title} · Bảo vật quốc gia thời Trần`;

    const dossierH3 = document.getElementById('inspector-dossier-title');
    if (dossierH3) dossierH3.textContent = `Hồ Sơ: ${data.title}`;

    const dossierDesc = document.getElementById('inspector-desc');
    if (dossierDesc) dossierDesc.textContent = data.desc;

    const specsBox = document.getElementById('inspector-specs');
    if (specsBox) {
      specsBox.innerHTML = `
        <div><strong>Niên đại:</strong> ${data.period}</div>
        <div><strong>Chất liệu:</strong> ${data.material}</div>
        <div><strong>Kích thước:</strong> ${data.dimension}</div>
      `;
    }
  }

  // Khởi tạo trang Giám định 360 (Page 07)
  function initInspectorPage() {
    const params = new URLSearchParams(window.location.search);
    const artId = params.get('id') || 'thap-gom-hoa-nau';
    currentArtifactId = artId;
    const data = ARTIFACT_DATA[artId] || ARTIFACT_DATA['thap-gom-hoa-nau'];

    updateInspectorDOM(data);

    // Lắng nghe phím Space / Enter để mở hộp tiện lợi
    document.addEventListener('keydown', function (e) {
      if (e.code === 'Space' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        window.triggerMysteryUnbox();
      }
    });
  }

  // --- 7. ĐỐ VUI TRẮC NGHIỆM SỬ HỌC (PAGE 08 - QUIZ ENGINE) ---
  const QUIZ_QUESTIONS = [
    {
      question: 'Tại sao thời đại nhà Trần lại được gọi là "Hào khí Đông A"?',
      topic: 'Bối cảnh lịch sử',
      options: [
        'Vì triều đình đóng đô ở vùng Đông A, Nam Định',
        'Vì chữ "Trần" (陳) trong chữ Hán được ghép từ chữ "Đông" (東) và chữ "A" (阝)',
        'Vì nhà Trần xuất thân từ vùng biển phía Đông của Đại Việt',
        'Vì tên một vị hoàng đế vĩ đại thời Trần'
      ],
      correct: 1,
      explanation: 'Chính xác! Trong chữ Hán, chữ Trần (陳) được cấu thành bởi chữ Đông (東) bên phải và bộ phụ A (阝) bên trái. Cụm từ "Hào khí Đông A" tượng trưng cho khí thế quật cường, tinh thần thượng võ và lòng yêu nước bất diệt của thời đại nhà Trần.'
    },
    {
      question: 'Hội nghị Diên Hồng năm 1284 được tổ chức nhằm mục đích gì?',
      topic: 'Sự kiện lịch sử',
      options: [
        'Bầu chọn tân hoàng đế cho triều đại',
        'Hỏi ý kiến các bô lão nhân dân: "Nên hòa hay nên đánh?"',
        'Chia ruộng đất cho nông dân nghèo',
        'Ký kết hiệp ước hòa hoãn với quân Nguyên Mông'
      ],
      correct: 1,
      explanation: 'Chính xác! Hội nghị Diên Hồng là biểu tượng sáng ngời của tinh thần dân chủ và đại đoàn kết dân tộc thời Trần khi Thượng hoàng Trần Thánh Tông lấy ý kiến của toàn dân để quyết định vận mệnh quốc gia.'
    },
    {
      question: 'Hoài Văn Hầu Trần Quốc Toản vì uất hận không được dự bàn việc quân đã bóp nát quả gì?',
      topic: 'Nhân vật lịch sử',
      options: [
        'Quả bưởi đào',
        'Quả cam sành',
        'Quả lựu chín',
        'Quả thị vàng'
      ],
      correct: 1,
      explanation: 'Chính xác! Tại bến Bình Than năm 1282, do tuổi còn nhỏ chưa đủ quyền dự bàn quân cơ, chàng thiếu niên Trần Quốc Toản đã vô tình bóp nát quả cam sành quý do vua ban lúc nào không hay vì lòng căm tức sục sôi.'
    },
    {
      question: 'Ai là tác giả của thiên cổ hùng văn "Hịch Tướng Sĩ"?',
      topic: 'Danh nhân văn hóa',
      options: [
        'Thái sư Trần Thủ Độ',
        'Thượng tướng Thái sư Trần Quang Khải',
        'Tiết chế Quốc công Trần Hưng Đạo',
        'Phật hoàng Trần Nhân Tông'
      ],
      correct: 2,
      explanation: 'Chính xác! Hưng Đạo Đại Vương Trần Quốc Tuấn đã viết bài Hịch Tướng Sĩ lay động muôn triệu con tim tướng sĩ, khơi dậy tinh thần quyết chiến trước cuộc kháng chiến chống quân Nguyên lần thứ hai năm 1285.'
    },
    {
      question: 'Bảo vật Thạp gốm hoa nâu thời Trần nổi bật với họa tiết chạm khắc gì?',
      topic: 'Hiện vật khảo cổ',
      options: [
        'Hoa sen và chim phượng',
        'Hình tượng tráng sĩ Đại Việt mình trần, quấn khố, cầm giáo cưỡi ngựa',
        'Sóng nước và rồng năm móng',
        'Cảnh cày cấy nông nghiệp làng quê'
      ],
      correct: 1,
      explanation: 'Chính xác! Thạp gốm hoa nâu thời Trần lưu giữ tại Bảo tàng Lịch sử Quốc gia khắc họa hình ảnh các võ sĩ Đại Việt cưỡi ngựa cầm giáo, phản ánh tinh thần thượng võ và quân khí dũng mãnh thời đại Đông A.'
    }
  ];

  let currentQuizIdx = 0;
  let quizScore = 0;
  let answered = false;

  window.answerQuiz = function (selectedIdx) {
    if (answered) return;
    answered = true;

    const q = QUIZ_QUESTIONS[currentQuizIdx];
    const isCorrect = selectedIdx === q.correct;
    if (isCorrect) quizScore += 20;

    const btns = document.querySelectorAll('.space-y-3 > button');
    btns.forEach((btn, idx) => {
      if (idx === q.correct) {
        btn.classList.add('bg-green-100', 'border-green-600', 'text-green-900', 'font-bold');
        btn.classList.remove('bg-white', 'text-[#1C1917]');
      } else if (idx === selectedIdx && !isCorrect) {
        btn.classList.add('bg-red-100', 'border-red-600', 'text-red-900', 'font-bold');
        btn.classList.remove('bg-white', 'text-[#1C1917]');
      }
    });

    // Hiển thị lời giải thích & nút kế tiếp
    let feedbackBox = document.getElementById('quiz-feedback');
    if (!feedbackBox) {
      feedbackBox = document.createElement('div');
      feedbackBox.id = 'quiz-feedback';
      feedbackBox.className = 'mt-5 p-4 rounded-xl border border-[#D4A359]/40 bg-[#F2EBD9] animate-fade-in space-y-3';
      const container = document.querySelector('.bg-\\[\\#FAF7F0\\].border-2.border-\\[\\#D4A359\\]\\/60');
      if (container) container.appendChild(feedbackBox);
    }

    feedbackBox.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="text-sm font-bold ${isCorrect ? 'text-green-700' : 'text-[#8B1E1E]'}">
          ${isCorrect ? '✓ Chính xác!' : '✗ Chưa chính xác!'}
        </span>
      </div>
      <p class="text-xs sm:text-sm text-[#44403C] leading-relaxed">${q.explanation}</p>
      <div class="pt-3 border-t border-[#D4A359]/30 flex justify-between items-center">
        <span class="text-xs font-bold text-[#785928]">Điểm hiện tại: ${quizScore}/100</span>
        <button onclick="window.nextQuizQuestion()" class="px-4 py-2 bg-[#8B1E1E] hover:bg-[#701616] text-white text-xs font-bold rounded-lg cursor-pointer">
          ${currentQuizIdx < QUIZ_QUESTIONS.length - 1 ? 'Câu tiếp theo →' : 'Xem kết quả tổng kết 🏆'}
        </button>
      </div>
    `;
  };

  window.nextQuizQuestion = function () {
    currentQuizIdx++;
    answered = false;

    if (currentQuizIdx >= QUIZ_QUESTIONS.length) {
      renderQuizSummary();
      return;
    }

    renderQuizQuestion();
  };

  function renderQuizQuestion() {
    const q = QUIZ_QUESTIONS[currentQuizIdx];
    const topBar = document.querySelector('.flex.items-center.justify-between.text-xs.text-\\[\\#785928\\]');
    if (topBar) {
      topBar.innerHTML = `
        <span>Câu hỏi ${currentQuizIdx + 1} / ${QUIZ_QUESTIONS.length}</span>
        <span>Chủ đề: ${q.topic}</span>
        <span>Điểm: ${quizScore}</span>
      `;
    }

    const titleH2 = document.querySelector('.font-heading.font-bold.text-lg');
    if (titleH2) titleH2.textContent = q.question;

    const optionsContainer = document.querySelector('.space-y-3');
    if (optionsContainer) {
      const letters = ['A', 'B', 'C', 'D'];
      optionsContainer.innerHTML = q.options.map((opt, idx) => `
        <button
          onclick="window.answerQuiz(${idx})"
          class="w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer bg-white border-[#D4A359]/40 hover:border-[#8B1E1E] text-[#1C1917]"
        >
          <span class="font-bold shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs">
            ${letters[idx]}
          </span>
          <span class="flex-1 mt-0.5">${opt}</span>
        </button>
      `).join('');
    }

    const feedback = document.getElementById('quiz-feedback');
    if (feedback) feedback.remove();
  }

  function renderQuizSummary() {
    const container = document.querySelector('.bg-\\[\\#FAF7F0\\].border-2.border-\\[\\#D4A359\\]\\/60');
    if (!container) return;

    let rankText = "Hào kiệt sử học";
    let comment = "Bạn có kiến thức lịch sử thời Trần vô cùng uyên bác!";
    if (quizScore < 60) {
      rankText = "Tân binh sử học";
      comment = "Hãy đọc thêm các trang truyện tranh và xem hiện vật để trau dồi nhé!";
    } else if (quizScore < 80) {
      rankText = "Dũng tướng Đông A";
      comment = "Rất tốt! Bạn nắm rất vững kiến thức các sự kiện và danh nhân.";
    }

    container.innerHTML = `
      <div class="text-center py-8 space-y-4 animate-fade-in">
        <div class="inline-flex p-4 rounded-full bg-[#D4A359]/20 text-[#8B1E1E] text-4xl">🏆</div>
        <h2 class="font-heading font-black text-2xl sm:text-3xl text-[#1C1917]">HOÀN THÀNH THỬ THÀNH SỬ HỌC</h2>
        <div class="text-4xl font-heading font-black text-[#8B1E1E]">${quizScore} / 100 Điểm</div>
        <div class="inline-block px-3 py-1 bg-[#235347] text-white text-xs font-bold rounded-full">${rankText}</div>
        <p class="text-xs sm:text-sm text-[#57534E] max-w-md mx-auto">${comment}</p>
        <div class="pt-6 flex justify-center gap-3">
          <button onclick="window.restartQuiz()" class="px-5 py-2.5 bg-[#FAF7F0] border-2 border-[#D4A359] text-xs font-bold rounded-xl text-[#785928] hover:bg-[#D4A359]/15">Làm lại bài thi ↺</button>
          <button onclick="window.navigateTo('trang-chu')" class="px-5 py-2.5 bg-[#8B1E1E] text-white text-xs font-bold rounded-xl hover:bg-[#701616]">Về trang chủ</button>
        </div>
      </div>
    `;
  }

  window.restartQuiz = function () {
    currentQuizIdx = 0;
    quizScore = 0;
    answered = false;
    renderQuizQuestion();
  };

  function loadComicPages() {
    for (const chap of Object.values(COMIC_CHAPTERS)) {
      const template = document.getElementById(`webtoon-pages-${chap.id}`);
      if (!template) continue;

      const notes = new Map(chap.pages.map(page => [page.id, page]));
      chap.notesOnly = template.hasAttribute('data-notes-only');
      chap.pages = Array.from(template.content.querySelectorAll('img'), (image, index) => {
        const pageIdx = index + 1;
        image.classList.add('webtoon-strip-image');
        image.loading = index === 0 ? 'eager' : 'lazy';
        image.decoding = 'async';

        return {
          ...notes.get(image.dataset.pageId),
          id: `${chap.id}-page-${pageIdx}`,
          image,
          pageIdx
        };
      });

      const count = document.getElementById(`chapter-count-${chap.id}`);
      if (count) count.textContent = `${chap.pages.length} trang`;
    }
  }

  // --- 8. HIGHLIGHT ACTIVE MENU HEADER & INIT ---
  document.addEventListener('DOMContentLoaded', function () {
    const pageName = window.location.pathname.split('/').pop() || '';

    const menuMap = [
      { pattern: 'page-home', navText: 'Trang chủ' },
      { pattern: 'index', navText: 'Trang chủ' },
      { pattern: 'page-reader', navText: 'Đọc truyện' },
      { pattern: 'doc-truyen', navText: 'Đọc truyện' },
      { pattern: 'page-characters', navText: 'Nhân vật' },
      { pattern: 'nhan-vat', navText: 'Nhân vật' },
      { pattern: 'page-events', navText: 'Sự kiện' },
      { pattern: 'su-kien', navText: 'Sự kiện' },
      { pattern: 'page-context', navText: 'Bối cảnh' },
      { pattern: 'boi-canh', navText: 'Bối cảnh' },
      { pattern: 'page-artifacts', navText: 'Tư liệu' },
      { pattern: 'tu-lieu', navText: 'Tư liệu' },
      { pattern: 'page-inspector', navText: 'Tư liệu' },
      { pattern: 'page-quiz', navText: 'Thử tài' },
      { pattern: 'trac-nghiem', navText: 'Thử tài' }
    ];

    const currentMatch = menuMap.find(m => pageName.includes(m.pattern));
    if (currentMatch) {
      document.querySelectorAll('nav button').forEach(btn => {
        if (btn.textContent.includes(currentMatch.navText)) {
          btn.classList.add('nav-active-link');
        }
      });
    }

    // Nếu đang ở trang Giám định 360
    if (pageName.includes('page-inspector') || pageName.includes('soi-hien-vat')) {
      initInspectorPage();
    }

    // Nếu đang ở trang Đọc truyện Webtoon (Page 02)
    if (pageName.includes('page-reader') || pageName.includes('doc-truyen')) {
      loadComicPages();
      const urlParams = new URLSearchParams(window.location.search);
      const urlChap = urlParams.get('chap');
      const savedChap = localStorage.getItem('selected_chapter');
      const targetChap = urlChap || savedChap || 'chap-1';
      window.openChapter(targetChap, false);
    }
  });

})();
