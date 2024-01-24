import React from 'react';
import { styled } from '@mui/material/styles';
import { Link, Typography, Stack, useMediaQuery, useTheme } from '@mui/material';
import ImageGallery from '../components/product/ImageGallery';
import { CustomContainer } from '../layout/CustomContainer';
import PathLine from '../components/shared/PathLine';
import RatingStars from '../components/shared/RatingStars';
import StateButtonGroup from '../components/product/StateButtonGroup';
import RoundedButton from '../components/shared/RoundedButton';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const Heading = styled(Typography)(() => ({
  fontWeight: '600',
  letterSpacing: '0em',
  textAlign: 'left',

}));

const Product = () => {

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const breadcrumbs = [
    <Link underline="hover" key="1" color="var(--primary)" fontWeight={'500'} href="/" onClick={handleClick}>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="var(--primary)"
      fontWeight={'500'}
      href="/category"
      onClick={handleClick}
    >
      Handbag
    </Link>,
    <Typography key="3" color="var(--summary-text)">
      Product
    </Typography>,
  ];
  const imageList = [
    {
      path: "/assets/newArrivals/BLACK-BAG 1.png",
      id: 1,
    },
    {
      path: "/assets/newArrivals/duffle 1.png",
      id: 2,
    },
    {
      path: "/assets/newArrivals/irene-kredenets-tcVH_BwHtrc-unsplash 2.png",
      id: 3,
    },
    {
      path: "/assets/newArrivals/pink-bag-small.png",
      id: 4,
    },
  ]

  const productName = "Coach";
  const productDescreption = "Leather Coach Bag with adjustable starps.";
  const rating = 4.0;
  const ratersNumber = 250;
  const price = 78.66;
  const discount = 0.5;
  const quantity = 0;
  //const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique. Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.';
  //const relatedProduct;
  //const reviews;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery('(min-width:900px) and (max-width:1300px)');
  const isXl = useMediaQuery('(min-width:1600px)');
  const imageWidth = isMobile ? '100%' : (isMd ? 605 : (isXl ? 905 : 805));
  return (
    <CustomContainer>
      <Stack direction={isMobile ? 'column' : 'row'} gap={isXl ? 27 : 3} sx={{ display: 'flex', justifyContent: isXl ? 'center' : 'left' }}>
        <Stack direction={'column'}>
          {!isMobile && <PathLine breadcrumbs={breadcrumbs} />}
          <ImageGallery imageList={imageList}
            width={imageWidth} />
        </Stack>
        <Stack direction='column' mt={'36px'}>
          <Heading sx={{ fontSize: '34px', lineHeight: '44px', color: 'var(--dark)', }}>{productName}</Heading>
          <Heading sx={{ fontSize: '20px', lineHeight: '26px', color: 'var(--summary-text)' }}>{productDescreption}</Heading>

          <Stack mt={'32px'} direction={'row'} alignItems={'center'} spacing={2}>
            <RatingStars rating={rating} space={'8px'} />
            <Typography sx={{ fontSize: '16px', lineHeight: '20px', fontWeight: '400', color: 'var(--light-text)' }}>
              ({ratersNumber}) Ratings
            </Typography>
          </Stack>

          <Stack mt={'24px'} direction={'row'} alignItems={'center'} spacing={2}>
            <Heading sx={{ fontSize: '40px', lineHeight: '52px', fontWeight: '700', color: 'var(--text)' }}>
              ${price * discount}
            </Heading>
            <Heading sx={{ fontSize: '34px', lineHeight: '26px', textAlign: 'Right', color: 'var(--light-text)', textDecoration: 'line-through' }}>
              ${price}
            </Heading>
            <Heading sx={{ fontSize: '20px', lineHeight: '26px', textAlign: 'Right', color: 'var(--vibrant)' }}>
              {discount * 100}%OFF
            </Heading>
          </Stack>

          <StateButtonGroup initialState={quantity} mt={'40px'} />

          <Stack direction={'row'} spacing={3} mt={'40px'} width={'100%'}>
            <RoundedButton
              buttonText={'Add To Bag'}
              ButtonIcon={ShoppingBagOutlinedIcon}
              onClickEvent={() => { console.log('Add to bag') }}
              isfilled={true}
              showLeftIcon={true}
              showRightIcon={false}
              is_mobile={false} 
              width= {isMobile ? '319px' :'328px'}
            />
            <RoundedButton
              buttonText={'Add To Wishlist'}
              ButtonIcon={FavoriteBorderRoundedIcon}
              onClickEvent={() => { console.log('Add To Wishlist') }}
              isfilled={false}
              showLeftIcon={true}
              showRightIcon={false}
              is_mobile={isMobile} 
              width= {isMobile ? '48px' :'240px'}
            />
          </Stack>

        </Stack>
      </Stack>



    </CustomContainer>

  );
};

export default Product;
