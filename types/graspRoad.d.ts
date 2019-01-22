declare namespace AMap {
    namespace GraspRoad {
        interface OriginPath {
            x: number;
            y: number;
            ag: number;
            tm: number;
            sp: number;
        }
        interface ErrorStatus {
            errmsg: string;
        }
        interface GraspPathPoint {
            x: number;
            y: number;
        }
        interface GraspPath {
            distance: number;
            points: GraspPathPoint[];
        }
        interface SearchResult {
            data: GraspPath;
            errcode: number;
            errdetail: any;
            errmsg: string;
            ext: any;
        }
    }

    class GraspRoad extends EventEmitter {
        driving(
            path: GraspRoad.OriginPath[],
            callback: (err: GraspRoad.ErrorStatus | null, result: GraspRoad.SearchResult) => void
        ): void;
        // internal
        bicycling(
            path: GraspRoad.OriginPath[],
            callback: (err: GraspRoad.ErrorStatus | null, result: GraspRoad.SearchResult) => void
        ): void;
        // search
    }
}
