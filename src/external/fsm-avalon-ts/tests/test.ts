// import expect from 'chai';
// import { getFSM, actionCreators } from '../../build/main/index';
// import {
//   NEEDED_KNIGHTS_LIST,
//   NEEDED_FAILED_LIST,
//   STATUS_BEFORE_INIT,
//   STATUS_INIT,
//   STATUS_TEAM_BUILD,
//   STATUS_TEAM_VOTING,
//   STATUS_TEAM_VOTED,
//   STATUS_MISSION,
//   STATUS_MISSION_FINISHED,
//   STATUS_GAMEOVER_SUCCESS,
//   STATUS_GAMEOVER_FAIL,
//   STATUS_ASSASSIN
// } from '../../build/main/config';

// const {
//   initGame,
//   startRound,
//   buildTeam,
//   vote,
//   drawVotesResult,
//   executeMission,
//   drawMissionsResult,
//   assassinate
// } = actionCreators;

// const TEST_VALUE_DEFAULT_VOTES_7: Vote[] = [
//   'WAIT',
//   'WAIT',
//   'WAIT',
//   'WAIT',
//   'WAIT',
//   'WAIT',
//   'WAIT'
// ];
// const TEST_VALUE_USER_7: Role[] = [
//   'MERLIN',
//   'OBERON',
//   'GOOD',
//   'GOOD',
//   'GOOD',
//   'BAD',
//   'BAD'
// ];

// type Test_Action = string;
// const ACTION_INIT_GAME: Test_Action = 'ACTION_INIT_GAME';
// const ACTION_START_ROUND: Test_Action = 'ACTION_START_ROUND';
// const ACTION_BUILD_TEAM_7_1: Test_Action = 'ACTION_BUILD_TEAM_7_1';
// const ACTION_BUILD_TEAM_7_2: Test_Action = 'ACTION_BUILD_TEAM_7_2';
// const ACTION_BUILD_TEAM_7_3: Test_Action = 'ACTION_BUILD_TEAM_7_3';
// const ACTION_BUILD_TEAM_7_4: Test_Action = 'ACTION_BUILD_TEAM_7_4';
// const ACTION_BUILD_TEAM_7_5: Test_Action = 'ACTION_BUILD_TEAM_7_5';
// const ACTION_VOTE_1_SUCCESS: Test_Action = 'ACTION_VOTE_1_SUCCESS';
// const ACTION_VOTE_2_SUCCESS: Test_Action = 'ACTION_VOTE_2_SUCCESS';
// const ACTION_VOTE_3_SUCCESS: Test_Action = 'ACTION_VOTE_3_SUCCESS';
// const ACTION_VOTE_4_SUCCESS: Test_Action = 'ACTION_VOTE_4_SUCCESS';
// const ACTION_VOTE_5_SUCCESS: Test_Action = 'ACTION_VOTE_5_SUCCESS';
// const ACTION_VOTE_6_SUCCESS: Test_Action = 'ACTION_VOTE_6_SUCCESS';
// const ACTION_VOTE_7_SUCCESS: Test_Action = 'ACTION_VOTE_7_SUCCESS';
// const ACTION_VOTE_1_FAIL: Test_Action = 'ACTION_VOTE_1_FAIL';
// const ACTION_VOTE_2_FAIL: Test_Action = 'ACTION_VOTE_2_FAIL';
// const ACTION_VOTE_3_FAIL: Test_Action = 'ACTION_VOTE_3_FAIL';
// const ACTION_VOTE_4_FAIL: Test_Action = 'ACTION_VOTE_4_FAIL';
// const ACTION_VOTE_5_FAIL: Test_Action = 'ACTION_VOTE_5_FAIL';
// const ACTION_VOTE_6_FAIL: Test_Action = 'ACTION_VOTE_6_FAIL';
// const ACTION_VOTE_7_FAIL: Test_Action = 'ACTION_VOTE_7_FAIL';
// const ACTION_DRAW_VOTES_RESULT: Test_Action = 'ACTION_DRAW_VOTES_RESULT';

// const ACTION_MISSION_1_SUCCESS: Test_Action = 'ACTION_MISSION_1_SUCCESS';
// const ACTION_MISSION_2_SUCCESS: Test_Action = 'ACTION_MISSION_2_SUCCESS';
// const ACTION_MISSION_3_SUCCESS: Test_Action = 'ACTION_MISSION_3_SUCCESS';
// const ACTION_MISSION_4_SUCCESS: Test_Action = 'ACTION_MISSION_4_SUCCESS';
// const ACTION_MISSION_5_SUCCESS: Test_Action = 'ACTION_MISSION_5_SUCCESS';
// const ACTION_MISSION_6_SUCCESS: Test_Action = 'ACTION_MISSION_6_SUCCESS';
// const ACTION_MISSION_7_SUCCESS: Test_Action = 'ACTION_MISSION_7_SUCCESS';
// const ACTION_MISSION_1_FAIL: Test_Action = 'ACTION_MISSION_1_FAIL';
// const ACTION_MISSION_2_FAIL: Test_Action = 'ACTION_MISSION_2_FAIL';
// const ACTION_MISSION_3_FAIL: Test_Action = 'ACTION_MISSION_3_FAIL';
// const ACTION_MISSION_4_FAIL: Test_Action = 'ACTION_MISSION_4_FAIL';
// const ACTION_MISSION_5_FAIL: Test_Action = 'ACTION_MISSION_5_FAIL';
// const ACTION_MISSION_6_FAIL: Test_Action = 'ACTION_MISSION_6_FAIL';
// const ACTION_MISSION_7_FAIL: Test_Action = 'ACTION_MISSION_7_FAIL';

// const ACTION_DRAW_MISSIONS_RESULT = 'ACTION_DRAW_MISSIONS_RESULT';

// const ACTION_ASSASSIN_SUCCESS: Test_Action = 'ACTION_ASSASSIN_SUCCESS';
// const ACTION_ASSASSIN_FAIL: Test_Action = 'ACTION_ASSASSIN_FAIL';

// const ACTION_MAP = {
//   [ACTION_INIT_GAME]: initGame({ users: TEST_VALUE_USER_7 }),
//   [ACTION_START_ROUND]: startRound(),
//   [ACTION_BUILD_TEAM_7_1]: buildTeam({ knights: [0, 1] }),
//   [ACTION_BUILD_TEAM_7_2]: buildTeam({ knights: [0, 1, 2] }),
//   [ACTION_BUILD_TEAM_7_3]: buildTeam({ knights: [0, 1, 2] }),
//   [ACTION_BUILD_TEAM_7_4]: buildTeam({ knights: [0, 1, 2, 3] }),
//   [ACTION_BUILD_TEAM_7_5]: buildTeam({ knights: [0, 1, 2, 3] }),
//   [ACTION_VOTE_1_SUCCESS]: vote({ index: 0, vote: 'APPROVE' }),
//   [ACTION_VOTE_1_FAIL]: vote({ index: 0, vote: 'REJECT' }),
//   [ACTION_VOTE_2_SUCCESS]: vote({ index: 1, vote: 'APPROVE' }),
//   [ACTION_VOTE_2_FAIL]: vote({ index: 1, vote: 'REJECT' }),
//   [ACTION_VOTE_3_SUCCESS]: vote({ index: 2, vote: 'APPROVE' }),
//   [ACTION_VOTE_3_FAIL]: vote({ index: 2, vote: 'REJECT' }),
//   [ACTION_VOTE_4_SUCCESS]: vote({ index: 3, vote: 'APPROVE' }),
//   [ACTION_VOTE_4_FAIL]: vote({ index: 3, vote: 'REJECT' }),
//   [ACTION_VOTE_5_SUCCESS]: vote({ index: 4, vote: 'APPROVE' }),
//   [ACTION_VOTE_5_FAIL]: vote({ index: 4, vote: 'REJECT' }),
//   [ACTION_VOTE_6_SUCCESS]: vote({ index: 5, vote: 'APPROVE' }),
//   [ACTION_VOTE_6_FAIL]: vote({ index: 5, vote: 'REJECT' }),
//   [ACTION_VOTE_7_SUCCESS]: vote({ index: 6, vote: 'APPROVE' }),
//   [ACTION_VOTE_7_FAIL]: vote({ index: 6, vote: 'REJECT' }),
//   [ACTION_DRAW_VOTES_RESULT]: drawVotesResult(),
//   [ACTION_MISSION_1_SUCCESS]: executeMission({ index: 0, mission: 'SUCCESS' }),
//   [ACTION_MISSION_2_SUCCESS]: executeMission({ index: 1, mission: 'SUCCESS' }),
//   [ACTION_MISSION_3_SUCCESS]: executeMission({ index: 2, mission: 'SUCCESS' }),
//   [ACTION_MISSION_4_SUCCESS]: executeMission({ index: 3, mission: 'SUCCESS' }),
//   [ACTION_MISSION_5_SUCCESS]: executeMission({ index: 4, mission: 'SUCCESS' }),
//   [ACTION_MISSION_6_SUCCESS]: executeMission({ index: 5, mission: 'SUCCESS' }),
//   [ACTION_MISSION_7_SUCCESS]: executeMission({ index: 6, mission: 'SUCCESS' }),
//   [ACTION_MISSION_1_FAIL]: executeMission({ index: 0, mission: 'FAIL' }),
//   [ACTION_MISSION_2_FAIL]: executeMission({ index: 1, mission: 'FAIL' }),
//   [ACTION_MISSION_3_FAIL]: executeMission({ index: 2, mission: 'FAIL' }),
//   [ACTION_MISSION_4_FAIL]: executeMission({ index: 3, mission: 'FAIL' }),
//   [ACTION_MISSION_5_FAIL]: executeMission({ index: 4, mission: 'FAIL' }),
//   [ACTION_MISSION_6_FAIL]: executeMission({ index: 5, mission: 'FAIL' }),
//   [ACTION_MISSION_7_FAIL]: executeMission({ index: 6, mission: 'FAIL' }),
//   [ACTION_DRAW_MISSIONS_RESULT]: drawMissionsResult(),
//   [ACTION_ASSASSIN_SUCCESS]: assassinate({ index: 0 }),
//   [ACTION_ASSASSIN_FAIL]: assassinate({ index: 2 })
// };

// const TEST_STEPS_BEFORE_INIT: Test_Action[] = [];
// const TEST_STEPS_INIT: Test_Action[] = [ACTION_INIT_GAME];
// const TEST_STEPS_FIRST_BUILD_TEAM: Test_Action[] = [
//   ACTION_INIT_GAME,
//   ACTION_START_ROUND,
//   ACTION_BUILD_TEAM_7_1
// ];

// const TEST_STEPS_VOTES_ALL_SUCCESS: Test_Action[] = [
//   ACTION_VOTE_1_FAIL,
//   ACTION_VOTE_2_FAIL,
//   ACTION_VOTE_3_FAIL,
//   ACTION_VOTE_4_SUCCESS,
//   ACTION_VOTE_5_SUCCESS,
//   ACTION_VOTE_6_SUCCESS,
//   ACTION_VOTE_7_SUCCESS
// ];

// const TEST_STEPS_VOTES_ALL_FAIL: Test_Action[] = [
//   ACTION_VOTE_1_FAIL,
//   ACTION_VOTE_2_FAIL,
//   ACTION_VOTE_3_FAIL,
//   ACTION_VOTE_4_FAIL,
//   ACTION_VOTE_5_SUCCESS,
//   ACTION_VOTE_6_SUCCESS,
//   ACTION_VOTE_7_SUCCESS
// ];

// const TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT: Test_Action[] = [
//   ...TEST_STEPS_VOTES_ALL_SUCCESS,
//   ACTION_DRAW_VOTES_RESULT
// ];

// const TEST_STEPS_VOTES_ALL_FAIL_DRAWRESULT: Test_Action[] = [
//   ...TEST_STEPS_VOTES_ALL_FAIL,
//   ACTION_DRAW_VOTES_RESULT
// ];

// const TEST_STEPS_ONE_VOTE_ROUND: Test_Action[] = [
//   ACTION_START_ROUND,
//   ACTION_BUILD_TEAM_7_1
// ];
// const TEST_STEPS_ONE_VOTE_ROUND_ALL_VOTES_FAIL_DRAWRESULT: Test_Action[] = [
//   ...TEST_STEPS_ONE_VOTE_ROUND,
//   ...TEST_STEPS_VOTES_ALL_FAIL,
//   ACTION_DRAW_VOTES_RESULT
// ];

// const TEST_STEPS_VOTE_5_FAIL: Test_Action[] = [
//   ...TEST_STEPS_INIT,
//   ...TEST_STEPS_ONE_VOTE_ROUND_ALL_VOTES_FAIL_DRAWRESULT,
//   ...TEST_STEPS_ONE_VOTE_ROUND_ALL_VOTES_FAIL_DRAWRESULT,
//   ...TEST_STEPS_ONE_VOTE_ROUND_ALL_VOTES_FAIL_DRAWRESULT,
//   ...TEST_STEPS_ONE_VOTE_ROUND_ALL_VOTES_FAIL_DRAWRESULT,
//   ...TEST_STEPS_ONE_VOTE_ROUND_ALL_VOTES_FAIL_DRAWRESULT,
//   ACTION_START_ROUND
// ]

// const TEST_STEPS_MISSIONS_SUCCESS_1: Test_Action[] = [
//   ACTION_MISSION_1_SUCCESS,
//   ACTION_MISSION_2_SUCCESS
// ];

// const TEST_STEPS_MISSIONS_FAIL_1: Test_Action[] = [
//   ACTION_MISSION_1_SUCCESS,
//   ACTION_MISSION_2_FAIL
// ];

// const TEST_STEPS_MISSIONS_SUCCESS_1_DRAWRESULT: Test_Action[] = [
//   ...TEST_STEPS_MISSIONS_SUCCESS_1,
//   ACTION_DRAW_MISSIONS_RESULT
// ];

// const TEST_STEPS_MISSIONS_FAIL_1_DRAWRESULT: Test_Action[] = [
//   ...TEST_STEPS_MISSIONS_FAIL_1,
//   ACTION_DRAW_MISSIONS_RESULT
// ];

// const TEST_STEPS_MISSIONS_SUCCESS_2_DRAWRESULT: Test_Action[] = [
//   ACTION_MISSION_1_SUCCESS,
//   ACTION_MISSION_2_SUCCESS,
//   ACTION_MISSION_3_SUCCESS,
//   ACTION_DRAW_MISSIONS_RESULT
// ];
// const TEST_STEPS_MISSIONS_FAIL_2_DRAWRESULT: Test_Action[] = [
//   ACTION_MISSION_1_SUCCESS,
//   ACTION_MISSION_2_FAIL,
//   ACTION_MISSION_3_FAIL,
//   ACTION_DRAW_MISSIONS_RESULT
// ];
// const TEST_STEPS_MISSIONS_SUCCESS_3_DRAWRESULT: Test_Action[] = [
//   ACTION_MISSION_1_SUCCESS,
//   ACTION_MISSION_2_SUCCESS,
//   ACTION_MISSION_3_SUCCESS,
//   ACTION_DRAW_MISSIONS_RESULT
// ];
// const TEST_STEPS_MISSIONS_FAIL_3_DRAWRESULT: Test_Action[] = [
//   ACTION_MISSION_1_SUCCESS,
//   ACTION_MISSION_2_FAIL,
//   ACTION_MISSION_3_SUCCESS,
//   ACTION_DRAW_MISSIONS_RESULT
// ];
// const TEST_STEPS_MISSIONS_SUCCESS_4_DRAWRESULT: Test_Action[] = [
//   ACTION_MISSION_1_SUCCESS,
//   ACTION_MISSION_2_SUCCESS,
//   ACTION_MISSION_3_SUCCESS,
//   ACTION_MISSION_4_FAIL,
//   ACTION_DRAW_MISSIONS_RESULT
// ];
// const TEST_STEPS_MISSIONS_FAIL_4_DRAWRESULT: Test_Action[] = [
//   ACTION_MISSION_1_SUCCESS,
//   ACTION_MISSION_2_SUCCESS,
//   ACTION_MISSION_3_FAIL,
//   ACTION_MISSION_4_FAIL,
//   ACTION_DRAW_MISSIONS_RESULT
// ];
// const TEST_STEPS_MISSIONS_SUCCESS_5_DRAWRESULT: Test_Action[] = [
//   ACTION_MISSION_1_SUCCESS,
//   ACTION_MISSION_2_SUCCESS,
//   ACTION_MISSION_3_SUCCESS,
//   ACTION_MISSION_4_SUCCESS,
//   ACTION_DRAW_MISSIONS_RESULT
// ];
// const TEST_STEPS_MISSIONS_FAIL_5_DRAWRESULT: Test_Action[] = [
//   ACTION_MISSION_1_SUCCESS,
//   ACTION_MISSION_2_SUCCESS,
//   ACTION_MISSION_3_FAIL,
//   ACTION_MISSION_4_SUCCESS,
//   ACTION_DRAW_MISSIONS_RESULT
// ];

// const TEST_STEPS_ASSASSIN: Test_Action[] = [
//   ...TEST_STEPS_FIRST_BUILD_TEAM,
//   ...TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT,
//   ...TEST_STEPS_MISSIONS_SUCCESS_1_DRAWRESULT,
//   ACTION_START_ROUND,
//   ACTION_BUILD_TEAM_7_2,
//   ...TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT,
//   ...TEST_STEPS_MISSIONS_SUCCESS_2_DRAWRESULT,
//   ACTION_START_ROUND,
//   ACTION_BUILD_TEAM_7_3,
//   ...TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT,
//   ...TEST_STEPS_MISSIONS_SUCCESS_3_DRAWRESULT,
//   ACTION_START_ROUND
// ];

// const { reducer, getValidateError, getActions } = getFSM();

// const isTestAction = (x: any): x is Test_Action => typeof x === 'string';
// const isTestActionList = (x: any): x is Test_Action[] => x.length && x.length === x.filter(isTestAction).length;
// const isValue = (x: any): x is Value =>  
//   x.users 
//   && x.knights
//   && x.votes
//   && x.votesResult
//   && x.failedVotes
//   && x.missions
//   && x.missionResults
//   && x.captain
//   && x.goddessResults
//   && x.assassinated
//   && x.neededKnights
//   && x.neededFails;

// const testHelper = (
//   state: Test_Action | Test_Action[] | Value,
//   testSteps: Test_Action[] = []
// ): Value => {
//   let _state: Value, _testSteps: Test_Action[];

//   if (isValue(state)) {
//     if (isTestAction(testSteps)) {
//       _testSteps = [testSteps]
//     } else if (isTestActionList(testSteps)) {
//       _testSteps = [...testSteps];
//     } else {
//       throw new Error('Error type of testSteps for testHelper');
//     }
//     _state = { ...state }; 
//   } else if (isTestAction(state)) {
//     _testSteps = [state]
//     _state = reducer(undefined, {});
//   } else if (isTestActionList(state)) {
//     _testSteps = [...state]
//     _state = reducer(undefined, {});
//   } else {
//     throw new Error('Error type of state for testHelper')
//   }

//   _testSteps.forEach(el => {
//     _state = reducer(_state, ACTION_MAP[el]);
//   });

//   return _state;
// };

// describe('basic 7 people game', () => {
//   describe('before init', () => {
//     const state = testHelper(TEST_STEPS_BEFORE_INIT);
//     it('should return correct state', () => {
//       expect(state.status).equal(STATUS_BEFORE_INIT);
//     });
//   });

//   describe('init game', () => {
//     const state = testHelper(TEST_STEPS_BEFORE_INIT);
//     it('should return correct state', () => {
//       const _state = testHelper(TEST_STEPS_INIT);
//       const { status, value } = _state;
//       expect(status).equal(STATUS_INIT);
//       expect(value.users).deep.equal(TEST_VALUE_USER_7);
//       expect(value.config.isSetGoddess).equal(false);
//       expect(value.goddessResults).deep.equal([6]);
//       expect(value.neededKnights).deep.equal(NEEDED_KNIGHTS_LIST[7]);
//       expect(value.neededFails).deep.equal(NEEDED_FAILED_LIST[7]);
//       expect(value.failedVotes).equal(0);
//       expect(value.captain).equal(-1);
//     });
//     it('should get error when user less than 5', () => {
//       const _state = reducer(
//         state,
//         initGame({ users: ['GOOD', 'GOOD', 'GOOD', 'GOOD'] })
//       );
//       expect(getValidateError()).not.equal(null);
//     });
//     it('should get error when user more than 10', () => {
//       const _state = reducer(
//         state,
//         initGame({
//           users: [
//             'GOOD',
//             'GOOD',
//             'GOOD',
//             'GOOD',
//             'GOOD',
//             'GOOD',
//             'GOOD',
//             'GOOD',
//             'GOOD',
//             'GOOD',
//             'GOOD'
//           ]
//         })
//       );
//       expect(getValidateError()).not.equal(null);
//     });
//   });

//   describe('start round', () => {
//     describe('not end game', () => {
//       const state = testHelper(TEST_STEPS_INIT.concat(ACTION_START_ROUND));
//       const { status, value } = state;
//       it('should return correct state', () => {
//         expect(status).equal(STATUS_TEAM_BUILD);
//         expect(value.votes).deep.equal(TEST_VALUE_DEFAULT_VOTES_7);
//         expect(value.captain).equal(0);
//       });
//     });

//     describe('end game', () => {
//       const state = testHelper(
//         TEST_STEPS_FIRST_BUILD_TEAM.concat(
//           TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT
//         )
//       );

//       describe('all fail votes 5 times', () => {
//         const state = testHelper(TEST_STEPS_VOTE_5_FAIL);
//         const { status, value } = state;
//         it('should return correct state', () => {
//           expect(status).equal(STATUS_GAMEOVER_FAIL);
//           expect(value.failedVotes).equal(5);
//           expect(value.votesResult).equal(false);
//           expect(value.captain).equal(5);
//         });
//       });

//       describe('reach 3 missions fail', () => {
//         let _state = testHelper(
//           state,
//           TEST_STEPS_MISSIONS_FAIL_1_DRAWRESULT.concat([
//             ACTION_START_ROUND,
//             ACTION_BUILD_TEAM_7_2
//           ])
//             .concat(TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT)
//             .concat(TEST_STEPS_MISSIONS_FAIL_2_DRAWRESULT)
//             .concat([ACTION_START_ROUND, ACTION_BUILD_TEAM_7_3])
//             .concat(TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT)
//             .concat(TEST_STEPS_MISSIONS_SUCCESS_3_DRAWRESULT)
//             .concat([ACTION_START_ROUND, ACTION_BUILD_TEAM_7_4])
//             .concat(TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT)
//             .concat(TEST_STEPS_MISSIONS_SUCCESS_4_DRAWRESULT)
//             .concat([ACTION_START_ROUND, ACTION_BUILD_TEAM_7_5])
//             .concat(TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT)
//             .concat(TEST_STEPS_MISSIONS_FAIL_5_DRAWRESULT)
//             .concat(ACTION_START_ROUND)
//         );
//         it('should return correct state', () => {
//           const { status, value } = _state;
//           expect(status).equal(STATUS_GAMEOVER_FAIL);
//         });
//       });
//       describe('reach 3 missions success', () => {
//         let _state = testHelper(
//           state,
//           TEST_STEPS_MISSIONS_FAIL_1_DRAWRESULT.concat([
//             ACTION_START_ROUND,
//             ACTION_BUILD_TEAM_7_2
//           ])
//             .concat(TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT)
//             .concat(TEST_STEPS_MISSIONS_FAIL_2_DRAWRESULT)
//             .concat([ACTION_START_ROUND, ACTION_BUILD_TEAM_7_3])
//             .concat(TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT)
//             .concat(TEST_STEPS_MISSIONS_SUCCESS_3_DRAWRESULT)
//             .concat([ACTION_START_ROUND, ACTION_BUILD_TEAM_7_4])
//             .concat(TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT)
//             .concat(TEST_STEPS_MISSIONS_SUCCESS_4_DRAWRESULT)
//             .concat([ACTION_START_ROUND, ACTION_BUILD_TEAM_7_5])
//             .concat(TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT)
//             .concat(TEST_STEPS_MISSIONS_SUCCESS_5_DRAWRESULT)
//             .concat(ACTION_START_ROUND)
//         );
//         it('should return correct state', () => {
//           const { status, value } = _state;
//           expect(status).equal(STATUS_ASSASSIN);
//         });
//       });
//     });
//   });
//   describe('choose knights', () => {
//     const state = testHelper(TEST_STEPS_INIT.concat(ACTION_START_ROUND));
//     it('should return correct state', () => {
//       const _state = testHelper(state, ACTION_BUILD_TEAM_7_1);
//       const { status, value } = _state;
//       expect(status).equal(STATUS_TEAM_VOTING);
//       expect(value.votes).deep.equal(TEST_VALUE_DEFAULT_VOTES_7);
//       expect(value.captain).equal(0);
//     });
//     it('should return error if amount of knights error', () => {
//       const _state = reducer(state, buildTeam({ knights: [] }));
//       expect(getValidateError()).not.equal(null);
//     });
//     it('should return error if have the same index', () => {
//       const _state = reducer(state, buildTeam({ knights: [1, 1] }));
//       expect(getValidateError()).not.equal(null);
//     });
//     it('should return error if index error', () => {
//       const _state = reducer(state, buildTeam({ knights: [0, 7] }));
//       expect(getValidateError()).not.equal(null);
//     });
//   });

//   describe('vote', () => {
//     const state = testHelper(TEST_STEPS_FIRST_BUILD_TEAM);
//     const { status, value } = state;
//     describe('one user vote', () => {
//       it('should return correct state', () => {
//         const _state = testHelper(state, ACTION_VOTE_1_SUCCESS);
//         const { status, value } = _state;
//         expect(status).equal(STATUS_TEAM_VOTING);
//         expect(value.votes[0]).equal('APPROVE');
//         expect(value.votes[1]).equal('WAIT');
//         expect(value.votes[2]).equal('WAIT');
//       });
//       it('should get error when user vote is not APPROVE or REJECT', () => {
//         const _state = reducer(state, vote({ index: 0, vote: 'TTT' }));
//         expect(getValidateError()).not.equal(null);
//       });
//       it('should get error when index out of bound', () => {
//         const _state = reducer(state, vote({ index: 7, vote: 'APPROVE' }));
//         expect(getValidateError()).not.equal(null);
//       });
//       it('should get error when index of vote already exist', () => {
//         let _state = reducer(state, vote({ index: 6, vote: 'APPROVE' }));
//         _state = reducer(_state, vote({ index: 6, vote: 'REJECT' }));
//         expect(getValidateError()).not.equal(null);
//       });
//     });
//     describe('all user vote', () => {
//       const _state = testHelper(state, TEST_STEPS_VOTES_ALL_SUCCESS);
//       const { status, value } = _state;
//       it('should return correct state', () => {
//         expect(status).equal(STATUS_TEAM_VOTED);
//       });
//     });
//   });

//   describe('draw vote result', () => {
//     const state = testHelper(TEST_STEPS_FIRST_BUILD_TEAM);
//     describe('vote failed', () => {
//       const _state = testHelper(
//         state,
//         TEST_STEPS_VOTES_ALL_FAIL.concat(ACTION_DRAW_VOTES_RESULT)
//       );
//       const { status, value } = _state;
//       it('should return correct state', () => {
//         expect(status).equal(STATUS_INIT);
//         expect(value.failedVotes).equal(1);
//         expect(value.votesResult).equal(false);
//       });
//     });
//     describe('vote succeed', () => {
//       const _state = testHelper(
//         state,
//         TEST_STEPS_VOTES_ALL_SUCCESS.concat(ACTION_DRAW_VOTES_RESULT)
//       );
//       const { status, value } = _state;
//       it('should return correct state', () => {
//         expect(status).equal(STATUS_MISSION);
//         expect(value.failedVotes).equal(0);
//         expect(value.votesResult).equal(true);
//         expect(value.missions).deep.equal([
//           'WAIT',
//           'WAIT',
//           'NO',
//           'NO',
//           'NO',
//           'NO',
//           'NO'
//         ]);
//       });
//     });
//   });

//   describe('excute mission', () => {
//     const state = testHelper(
//       TEST_STEPS_FIRST_BUILD_TEAM.concat(
//         TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT
//       )
//     );
//     describe('do one mission', () => {
//       it('should return correct state', () => {
//         const _state = testHelper(state, ACTION_MISSION_2_SUCCESS);
//         const { status, value } = _state;
//         expect(status).equal(STATUS_MISSION);
//         expect(value.missions[0]).equal('WAIT');
//         expect(value.missions[1]).equal('SUCCESS');
//         expect(value.missions[2]).equal('NO');
//       });
//       it('should get error when user vote is not SUCCESS or FAIL', () => {
//         const _state = reducer(
//           state,
//           executeMission({ index: 0, mission: 'TEST' })
//         );
//         expect(getValidateError()).not.equal(null);
//       });
//       it('should get error when index out of bound', () => {
//         const _state = reducer(
//           state,
//           executeMission({ index: 7, mission: 'SUCCESS' })
//         );
//         expect(getValidateError()).not.equal(null);
//       });
//       it('should get error when index of vote already exist', () => {
//         let _state = reducer(
//           state,
//           executeMission({ index: 0, mission: 'SUCCESS' })
//         );
//         _state = reducer(
//           _state,
//           executeMission({ index: 0, mission: 'SUCCESS' })
//         );
//         expect(getValidateError()).not.equal(null);
//       });
//       it('should get error when index is not knight', () => {
//         const _state = reducer(
//           state,
//           executeMission({ index: 6, mission: 'SUCCESS' })
//         );
//         expect(getValidateError()).not.equal(null);
//       });
//     });
//     describe('do all missions', () => {
//       it('should return correct state', () => {
//         const _state = testHelper(state, [
//           ACTION_MISSION_1_SUCCESS,
//           ACTION_MISSION_2_SUCCESS
//         ]);
//         const { status, value } = _state;
//         expect(status).equal(STATUS_MISSION_FINISHED);
//       });
//     });
//   });

//   describe('draw missions result', () => {
//     const state = testHelper(
//       TEST_STEPS_FIRST_BUILD_TEAM.concat(
//         TEST_STEPS_VOTES_ALL_SUCCESS_DRAWRESULT
//       )
//     );
//     describe('mission success', () => {
//       const _state = testHelper(state, [
//         ACTION_MISSION_1_SUCCESS,
//         ACTION_MISSION_2_SUCCESS,
//         ACTION_DRAW_MISSIONS_RESULT
//       ]);
//       it('should return correct state', () => {
//         const { status, value } = _state;
//         expect(status).equal(STATUS_INIT);
//         expect(value.missionResults).deep.equal([
//           { result: true, failAmount: 0, successAmount: 2 }
//         ]);
//       });
//     });
//     describe('mission fail', () => {
//       const _state = testHelper(state, [
//         ACTION_MISSION_1_SUCCESS,
//         ACTION_MISSION_2_FAIL,
//         ACTION_DRAW_MISSIONS_RESULT
//       ]);
//       it('should return correct state', () => {
//         const { status, value } = _state;
//         expect(status).equal(STATUS_INIT);
//         expect(value.missionResults).deep.equal([
//           { result: false, failAmount: 1, successAmount: 1 }
//         ]);
//       });
//     });
//   });

//   describe('assassinate', () => {
//     const state = testHelper(TEST_STEPS_ASSASSIN);
//     describe('assassinate good guys', () => {
//       describe('assassin correct', () => {
//         const _state = testHelper(state, ACTION_ASSASSIN_SUCCESS);
//         it('should return correct state', () => {
//           const { status, value } = _state;
//           expect(status).equal(STATUS_GAMEOVER_FAIL);
//         });
//       });
//       describe('assassinate fail', () => {
//         const _state = testHelper(state, ACTION_ASSASSIN_FAIL);
//         it('should return correct state', () => {
//           const { status, value } = _state;
//           expect(status).equal(STATUS_GAMEOVER_SUCCESS);
//         });
//       });
//     });
//     describe('assassinate bad guys', () => {
//       describe('assassinate oberon', () => {
//         it('should return correct state', () => {
//           const _state = reducer(state, assassinate({ index: 1 }));
//           it('should return correct state', () => {
//             const { status, value } = _state;
//             expect(status).equal(STATUS_GAMEOVER_SUCCESS);
//           });
//         });
//       });
//       describe('assassinate other bad guys', () => {
//         it('should return error', () => {
//           const _state = reducer(state, assassinate({ index: 6 }));
//           expect(getValidateError()).not.equal(null);
//         });
//       });
//     });
//   });
//   describe('goddess', () => {});
// });
