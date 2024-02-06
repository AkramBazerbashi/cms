export class RoutesModel {
    label: string;
    url: string;
    routes: any[];

    private static instance: RoutesModel;
    
    public static getInstance(): RoutesModel {
        if(!RoutesModel.instance) {
            RoutesModel.instance = new RoutesModel();
        }

        return RoutesModel.instance;
    }
}