import { ContentBlockType, IContentBlock } from "src/shared-interfaces/IContentBlock.interface";
import { IDummyDataResponse } from "src/shared-interfaces/IDummyDataResponse.interface";
import { getMockDataForm } from "./data-forms";
import { getMockFilterForms } from "./filter-forms";

export async function getMockModuleContent(contentRoute: string): Promise<IDummyDataResponse<IContentBlock[]>> {
  let data: IContentBlock[];

  switch (contentRoute) {
    case '/modules/5/content-blocks': // this value is very much linked to what is set in user.ts (5 is the module id)
      data = [
        {
          id: 1,
          order: 1,
          type: ContentBlockType.FILTER_FORM, // defines the format that should be used in the template
          forms: [],
          filterForms: await getMockFilterForms(),
          actionButtons: [],
          tables: []
        }
      ];
      break;
  
    case '/modules/3/content-blocks':
      data = [
        {
          id: 2,
          order: 1,
          type: ContentBlockType.FORM, // defines the format that should be used in the template
          forms: [await getMockDataForm()],
          filterForms: [],
          actionButtons: [],
          tables: []
        }
      ];
      break;
      
    default:
      // set content values as you see fit here
      data = [
        {
          id: 3,
          order: 1,
          type: ContentBlockType.ACTION_BUTTONS, // defines the format that should be used in the template
          forms: [],
          filterForms: await getMockFilterForms(),
          actionButtons: [],
          tables: []
        }
      ];
      break;
  }

  const res = { data }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res)
    }, 500);
  });
}