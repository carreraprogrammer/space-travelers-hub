import { filterMissions, getRockets} from './RocketsRedux';

describe('Test filterMissions', () => ({
    it('should return an array of reserved rockets', () => {
        const state = {
            rockets: [
                {
                    rocket_id: '1',
                    rocketName: 'rocket1',
                    description: 'rocket1 description',
                    flickrImages: 'rocket1 image',
                    reserved: true,
                },
                {
                    rocket_id: '2',
                    rocketName: 'rocket2',
                    description: 'rocket2 description',
                    flickrImages: 'rocket2 image',
                    reserved: false,
                },
            ],
        };

        const expected = [
            {
                rocket_id: '1',
                rocketName: 'rocket1',
                description: 'rocket1 description',
                flickrImages: 'rocket1 image',
                reserved: true,
            },
        ];
        const result = filterMissions(state);
        expect(result).toEqual(expected);
    }
})



describe('get rockets funtion test', () => {
    it('get rockets test', () => {
      expect(getRockets()).toEqual({
        type: 'GET_ROCKETS',
      });
    });
  });