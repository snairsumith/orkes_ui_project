import { Machine, assign } from 'xstate';
import { axiosGet } from '../../utils/api.service';
interface ApiMachineContext {
    data: any[]; // Adjust this data type to your API response structure
    error: any;
    page: number;
  }
  type ApiMachineEvent = { type: 'FETCH' };

  
export const userListMachines = Machine<ApiMachineContext, ApiMachineEvent>({
  id: 'userListApi',
  initial: 'idle',
  context: {
    data: [],
    error: null,
    page:1
  },
  states: {
    idle: {
      on: {
        FETCH: 'loading',
      },
    },
    loading: {
      invoke: {
        src: 'fetchData',
        onDone: {
          target: 'success',
          actions: assign<ApiMachineContext, any>({
            data: (context, event) => [...context.data, ...event.data],
            page: (context) => context.page + 1,
          }),
        },
        onError: {
          target: 'failure',
          actions: assign<ApiMachineContext, any>({ error: (_, event) => event.data }),
        },
      },
    },
    success: {
      on: {
        FETCH: 'loading',
      },
    },
    failure: {
      on: {
        FETCH: 'loading',
      },
    },
  },
}, {
  services: {
    fetchData: async (context) => {
      try {
        const response = await axiosGet(`photo-gallery-feed-page/page/${context.page}`);
        return response?.response?.data?.nodes;
      } catch (error) {
        throw error;
      }
    },
  },
});
