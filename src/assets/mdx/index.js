import Hello from './hello/hello.md';//ref: https://frontarm.com/james-k-nelson/mdx-with-create-react-app/
import LinuxNote from './linux-note/linux-note.md';
import DbDesignNote from './db-design-note/db-design-note.md';

const articleRouteMap = {
  'hello': Hello,
  'linux-note': LinuxNote,
  'db-design-note': DbDesignNote,
};

export default articleRouteMap;
