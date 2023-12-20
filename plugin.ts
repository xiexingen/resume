import { IApi } from 'umi'

export default (api: IApi) => {
  api.modifyHTML(($) => {
    $('head').append([
      `<script src="/upgrade/browser.js" type="text/javascript"></script>`,
      // `<script type="text/javascript">
      //   window.publicPath = '/';
      // </script>`
    ])
    return $;
  });
};