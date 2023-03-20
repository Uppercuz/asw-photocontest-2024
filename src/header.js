import DBanner from './img/asw-photo-contest-banner-d.jpg';
import TBanner from './img/asw-photo-contest-banner-t.jpg';
import MBanner from './img/asw-photo-contest-banner-m.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function header () {
  return (
    <header id="pageHeader">
      <div className="top-links grid grid-cols-2 gap-2 text-[12px] md:text-[14px] lg:text-xl text-center py-1 md:absolute md:right-4 md:top-1 md:text-white xl:right-[20%]">
        <p><strong className='font-semibold'>รายละเอียด กติกา และส่งภาพ</strong> : <a href="https://rpst.co.th" target="_blank" rel='noreferrer' title="">rpst.co.th</a></p>
        <p><strong className='font-semibold'>สอบถามข้อมูลเพิ่มเติม</strong> : <a href="tel:0972500058" target="_blank" rel='noreferrer' title="สอบถามข้อมูลเพิ่มเติม">097-250-0058</a></p>
      </div>
      <LazyLoadImage src={DBanner}
      srcSet={MBanner+' 520w, '+TBanner+' 820w, '+DBanner} 
      sizes='(max-width: 520px) 520w, (max-width: 820px) 820w, 1280w'
      alt="AssetWise Photo Contest 2023" width='1500px' height='730px' className='w-full mx-auto lg:w-auto xl:w-[1520px]' />
    </header>
  );
}

export default header;