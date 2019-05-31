import { css } from 'emotion';

export const contentWrapper = css({
   padding: '2rem 1rem'
});

export const listWrapper = css({
   fontSize: '.8rem',
   height: '80vh',
   margin: '0 auto',
   maxHeight: '850px',
   maxWidth: '70rem',
   overflowY: 'scroll',
   '@media (min-width:576px)': css`
      font-size: 1rem;
   `
});

export const listItem = css({
   color: '#333',
   display: 'flex',
   flexDirection: 'row',
   position: 'relative',
   textDecoration: 'none',
});

export const listItemWrapper = css({
   border: '1px solid #d8d8d8',
   transition: '.3s all',
   '::before': css`
      border-left: 3px solid #2d652f;
      content: " ";
      display: block;
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      transition: .4s all;
      width: 3rem;
   `,
   ':hover::before': css`
      opacity: 1;
   `,
   ':first-of-type': css`
      border-radius: 8px 8px 0 0;
   `,
   ':first-of-type::before': css`
   border-radius: 8px 8px 0 0;
   `,
   ':last-of-type': css`
      border-radius: 0 0 8px 8px;
   `,
   ':last-of-type::before': css`
      border-radius: 0 0 8px 8px;
   `,
});

export const loadingSpinnerWrapper = css({
   alignItems: 'center',
   display: 'flex',
   justifyContent: 'center'
})

export const listIndex = css({
   alignItems: 'center',
   // background: '#333',
   // color: '#f0f0f0',
   display: 'flex',
   height: '4rem',
   justifyContent: 'center',
   width: '2rem',
   '@media (min-width:576px)': css`
      height: 5rem;
      width: 5rem
   `
});

export const loadingSpinner = css({
   height: '4rem',
   width: '4rem',
   padding: '2rem'
})

export const backToListBtn = css({
   background: '#888',
   borderRadius: '5px',
   color: '#fff',
   display: 'inline-block',
   padding: '.5rem 1rem',
   textDecoration: 'none',
   transition: '.4s all',
   ':hover': css`
      background: #555;
   `
});

export const infoWrapper = css({
   fontSize: '1rem',
});

export const infoPanesWrapper = css({
   display: 'flex',
   flexDirection: 'column',
   '@media (min-width:576px)': css`
      flex-direction: row;
      margin: -1rem;
   `
})

export const infoPane = css({
   flex: '50%',
   padding: '.5rem 0',
   '@media (min-width:576px)': css`
      padding: 1rem;
   `
})