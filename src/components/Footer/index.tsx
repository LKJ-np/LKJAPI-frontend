import {BookFilled, GithubOutlined} from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
const Footer: React.FC = () => {
  const defaultMessage = '程序猿-LKJ出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'GitHub',
          title: 'GitHub',
          href: 'https://github.com/LKJ-np/LKJAPI-backend',
          // blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/LKJ-np/LKJAPI-backend',
          blankTarget: true,
        },
        {
          key: 'blob',
          title: <BookFilled />,
          href: 'https://github.com/LKJ-np',
          blankTarget: true,
        },
        {
          key: 'Blob',
          title: 'LKJ API',
          href: 'https://github.com/LKJ-np',
          // blankTarget: true,
        },
        {
          key: '豫ICP备2023032889号',
          title: '豫ICP备2023032889号',
          href: 'https://beian.miit.gov.cn/',
          // blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
