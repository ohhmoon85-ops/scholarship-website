import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "이용약관 | 한영자 희망 장학재단",
};

const sections = [
  {
    title: "제1조 (목적)",
    content: `이 약관은 재단법인 한영자 희망 장학재단(이하 "재단")이 운영하는 홈페이지(이하 "사이트")에서 제공하는 서비스의 이용 조건 및 절차, 재단과 이용자의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.`,
  },
  {
    title: "제2조 (정의)",
    content: `이 약관에서 사용하는 용어의 정의는 다음과 같습니다.

1. "사이트"란 재단이 운영하는 인터넷 홈페이지를 말합니다.
2. "이용자"란 사이트에 접속하여 이 약관에 따라 재단이 제공하는 서비스를 받는 자를 말합니다.
3. "서비스"란 재단이 사이트를 통해 제공하는 장학 신청, 공지사항 열람, 문의하기 등 일체의 서비스를 말합니다.`,
  },
  {
    title: "제3조 (약관의 효력 및 변경)",
    content: `1. 이 약관은 사이트 초기 화면에 게시하거나 기타의 방법으로 이용자에게 공시함으로써 효력이 발생합니다.

2. 재단은 「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령에 위배되지 않는 범위에서 이 약관을 개정할 수 있습니다.

3. 재단이 약관을 개정할 경우에는 적용일자 및 개정 사유를 명시하여 현행 약관과 함께 사이트 초기 화면에 그 적용일자 7일 이전부터 공지합니다.

4. 이용자가 개정 약관의 적용일 이후에도 서비스를 계속 이용하는 경우 개정 약관에 동의한 것으로 봅니다.`,
  },
  {
    title: "제4조 (서비스의 제공)",
    content: `재단은 이용자에게 다음의 서비스를 제공합니다.

1. 재단 소개 및 정보 제공
   - 재단의 설립 목적, 연혁, 조직 및 임원 정보 제공

2. 장학 사업 안내
   - 장학금 종류, 지원 자격, 신청 방법 등 장학 관련 정보 제공

3. 장학 신청 접수
   - 온라인 장학 신청서 및 서류 제출 서비스

4. 재단 소식
   - 공지사항, 이사회 결과, 포토갤러리 등 재단 관련 정보 제공

5. 문의하기
   - 재단에 대한 문의 및 건의 사항 접수`,
  },
  {
    title: "제5조 (서비스 이용)",
    content: `1. 서비스 이용은 재단의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로 합니다.

2. 재단은 컴퓨터 등 정보통신 설비의 보수점검, 교체 및 고장, 통신 두절 등의 사유가 발생한 경우에는 서비스 제공을 일시적으로 중단할 수 있습니다.

3. 재단은 제2항의 사유로 서비스 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상하지 않습니다. 단, 재단의 고의 또는 과실에 의한 경우는 예외로 합니다.`,
  },
  {
    title: "제6조 (이용자의 의무)",
    content: `이용자는 다음 행위를 하여서는 안 됩니다.

1. 신청 또는 변경 시 허위 내용의 등록
2. 타인의 정보 도용
3. 재단이 게시한 정보의 변경
4. 재단이 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시
5. 재단 기타 제3자의 저작권 등 지식재산권에 대한 침해
6. 재단 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
7. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 사이트에 공개 또는 게시하는 행위
8. 기타 불법적이거나 부당한 행위`,
  },
  {
    title: "제7조 (저작권의 귀속 및 이용 제한)",
    content: `1. 재단이 작성한 저작물에 대한 저작권 기타 지식재산권은 재단에 귀속합니다.

2. 이용자는 사이트를 이용함으로써 얻은 정보를 재단의 사전 승낙 없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.

3. 재단은 약정에 따라 이용자에게 귀속된 저작권을 사용하는 경우 당해 이용자에게 통보하여야 합니다.`,
  },
  {
    title: "제8조 (면책 조항)",
    content: `1. 재단은 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.

2. 재단은 이용자의 귀책 사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.

3. 재단은 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며 그 밖에 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.

4. 재단은 이용자가 사이트에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.`,
  },
  {
    title: "제9조 (분쟁 해결)",
    content: `1. 재단은 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리 기구를 설치·운영합니다.

2. 재단과 이용자 간에 발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여 설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.

3. 재단과 이용자 간에 발생한 소송은 대한민국 법원을 관할 법원으로 합니다.`,
  },
  {
    title: "제10조 (준거법 및 재판 관할)",
    content: `1. 재단과 이용자 간에 발생한 분쟁에 관한 소송은 대한민국 법률을 적용합니다.

2. 재단과 이용자 간에 발생한 분쟁에 관한 소송은 서울중앙지방법원을 관할 법원으로 합니다.

본 약관은 2026년 3월 1일부터 시행됩니다.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-navy-50 pt-[104px]">
        {/* 페이지 헤더 */}
        <div className="bg-navy-900 py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3">Terms of Use</p>
            <h1 className="text-3xl font-bold text-white font-heading">이용약관</h1>
            <p className="mt-2 text-sm text-white/50">한영자 희망 장학재단 홈페이지 이용약관입니다.</p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* 시행일 배너 */}
          <div className="mb-8 rounded-xl bg-gold/10 border border-gold/20 px-5 py-4">
            <p className="text-[13.5px] text-navy-800">
              <span className="font-bold text-gold">시행일:</span> 2026년 3월 1일&nbsp;&nbsp;
              <span className="text-navy-400">|</span>&nbsp;&nbsp;
              본 약관은 재단법인 한영자 희망 장학재단 홈페이지의 이용에 관한 사항을 규정합니다.
            </p>
          </div>

          {/* 본문 섹션들 */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div
                key={section.title}
                className="bg-white rounded-2xl border border-navy-100 shadow-sm px-8 py-7"
              >
                <h2 className="text-[16px] font-bold text-navy-900 font-heading mb-4 pb-3 border-b border-navy-100">
                  {section.title}
                </h2>
                <div className="text-[14px] text-navy-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[12px] text-navy-400 text-center">
            © 2026 재단법인 한영자 희망 장학재단. 본 약관은 법령 변경 시 개정될 수 있습니다.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
