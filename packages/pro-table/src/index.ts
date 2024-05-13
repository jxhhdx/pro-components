import ProTable from './Table';
import EditableProTable from './Edit';
import type { App } from 'vue';

export type { ProColumnType, ProColumnGroupType, ProColumnsType, ProTableProps, ResponseData } from './typings';

ProTable.install = (app: App) => app.component(ProTable.name as string, ProTable);

EditableProTable.install = (app: App) => app.component(EditableProTable.name as string, EditableProTable);

export { EditableProTable, ProTable };

export default ProTable;
