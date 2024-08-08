import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Product } from '../../interface/product';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '../Products/ProductItem';
import { Navigation } from 'swiper/modules';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}

        
        </Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({products} : {products: Product[]}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 'auto'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' , display : 'flex', justifyContent : 'center', alignItems : 'center' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='inherit' >
          <Tab label="Sản phẩm liên quan" {...a11yProps(0)}  />
          <Tab label="Bình luận" {...a11yProps(1)} />
          <Tab label="Đánh giá" {...a11yProps(2)} />
        </Tabs>
      </Box> 
      <CustomTabPanel  value={value} index={0}>
        <h2 className='flex jus-center mb-5'>Có thể bạn sẽ thích</h2>
      <Swiper
      navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {products?.map((product) => (
            
            <SwiperSlide key={product._id} >
                <div className='related-products'>
                <ProductItem  Product={product} />
                </div>
            </SwiperSlide>
        ))}
        
      </Swiper>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
     Đang phát triển...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
     Đang phát triển...

      </CustomTabPanel>
    </Box>
  );
}
